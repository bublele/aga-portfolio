from copy import deepcopy
from pathlib import Path
import xml.etree.ElementTree as ET


SVG_NAMESPACE = "http://www.w3.org/2000/svg"
ET.register_namespace("", SVG_NAMESPACE)

ROOT = Path(__file__).resolve().parents[1]
ASSET_DIRECTORY = ROOT / "public" / "obstruo"

SOURCES = (
    "group-24098.svg",
    "group-24099.svg",
    "group-24100.svg",
)

GRAPHIC_TAGS = {
    "circle",
    "ellipse",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
}


def local_name(tag: str) -> str:
    return tag.rsplit("}", 1)[-1]


def normalized_attribute(element: ET.Element, name: str) -> str:
    return element.attrib.get(name, "").strip().upper()


def is_layer_graphic(element: ET.Element, layer: str) -> bool:
    fill = normalized_attribute(element, "fill")
    stroke = normalized_attribute(element, "stroke")
    opacity = normalized_attribute(element, "opacity")

    if layer == "logo":
        return fill == "#58595B"
    if layer == "grid":
        return stroke in {"#B8B9BA", "#BBBBBB"}
    if layer == "guides":
        return stroke in {"#818285", "#58595B"}
    if layer == "accents":
        return fill == "#EDA5A5" and opacity == "0.1"
    if layer == "dimensions":
        return fill in {"#090909", "#2C2A39", "BLACK"} or (
            fill == "#EDA5A5" and opacity != "0.1"
        )

    return False


def filtered_copy(element: ET.Element, layer: str) -> ET.Element | None:
    name = local_name(element.tag)

    if name == "defs":
        return deepcopy(element)

    if name in GRAPHIC_TAGS:
        return deepcopy(element) if is_layer_graphic(element, layer) else None

    copied = ET.Element(element.tag, element.attrib)
    copied.text = element.text
    copied.tail = element.tail

    for child in element:
        filtered_child = filtered_copy(child, layer)
        if filtered_child is not None:
            copied.append(filtered_child)

    if name == "svg" or len(copied):
        return copied

    return None


for source_name in SOURCES:
    source = ASSET_DIRECTORY / source_name
    source_root = ET.parse(source).getroot()

    for layer_name in ("logo", "grid", "guides", "accents", "dimensions"):
        layer_root = filtered_copy(source_root, layer_name)
        if layer_root is None:
            raise RuntimeError(f"Could not create {layer_name} layer for {source_name}")

        if source_name == "group-24098.svg" and layer_name == "dimensions":
            for child in list(layer_root):
                if local_name(child.tag) == "path" and normalized_attribute(child, "fill") == "BLACK":
                    layer_root.remove(child)

            for x, y in (("411", "24"), ("0", "402")):
                label = ET.SubElement(
                    layer_root,
                    f"{{{SVG_NAMESPACE}}}text",
                    {
                        "x": x,
                        "y": y,
                        "fill": "#090909",
                        "font-family": "Arial, Helvetica, sans-serif",
                        "font-size": "22",
                    },
                )
                label.text = "4x"

        output = source.with_name(f"{source.stem}-{layer_name}.svg")
        ET.ElementTree(layer_root).write(output, encoding="utf-8", xml_declaration=True)
