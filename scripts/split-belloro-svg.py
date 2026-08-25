from copy import deepcopy
from pathlib import Path
import xml.etree.ElementTree as ET


SVG_NAMESPACE = "http://www.w3.org/2000/svg"
ET.register_namespace("", SVG_NAMESPACE)

ROOT = Path(__file__).resolve().parents[1]
ASSET_DIRECTORY = ROOT / "public" / "belloro"

SOURCES = (
    "group-1753.svg",
    "group-24096.svg",
    "group-24097.svg",
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
    fill_opacity = normalized_attribute(element, "fill-opacity")

    if layer == "logo":
        return fill == "#58595B"
    if layer == "grid":
        return stroke == "#B8B9BA"
    if layer == "guides":
        return stroke == "#818285"
    if layer == "accents":
        return fill == "#00FFBF" and fill_opacity == "0.1"
    if layer == "dimensions":
        return fill == "#090909" or (fill == "#00FFBF" and fill_opacity != "0.1")

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

        output = source.with_name(f"{source.stem}-{layer_name}.svg")
        ET.ElementTree(layer_root).write(output, encoding="utf-8", xml_declaration=True)
