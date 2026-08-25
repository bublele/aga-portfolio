import Image from "next/image";

type ConstructionDiagramProps = {
  assetName: string;
  className: string;
  height: number;
  label: string;
  width: number;
};

const constructionLayers = [
  "grid",
  "accents",
  "logo",
  "guides",
  "dimensions",
] as const;

function ConstructionDiagram({
  assetName,
  className,
  height,
  label,
  width,
}: ConstructionDiagramProps) {
  return (
    <div
      aria-describedby="obstruo-construction-hint"
      aria-label={label}
      className={`obstruo-construction__diagram ${className}`}
      role="img"
      tabIndex={0}
    >
      {constructionLayers.map((layer) => (
        <Image
          alt=""
          aria-hidden="true"
          className={`obstruo-construction__layer obstruo-construction__layer--${layer}`}
          height={height}
          key={layer}
          sizes="(max-width: 720px) 90vw, 75vw"
          src={`/obstruo/${assetName}-${layer}.svg`}
          unoptimized
          width={width}
        />
      ))}
    </div>
  );
}

export function ObstruoLogoConstruction() {
  return (
    <div
      aria-labelledby="obstruo-construction-title obstruo-construction-description"
      className="obstruo-construction"
      role="group"
    >
      <span className="visually-hidden" id="obstruo-construction-title">
        Konstrukcja znaku Obstruo.ai
      </span>
      <span className="visually-hidden" id="obstruo-construction-description">
        Trzy oryginalne warianty sygnetu i logotypu Obstruo.ai z animowanymi
        siatkami, liniami pomocniczymi i wymiarami.
      </span>

      <div className="obstruo-construction__board">
        <ConstructionDiagram
          assetName="group-24098"
          className="obstruo-construction__diagram--symbol"
          height={679}
          label="Konstrukcja sygnetu Obstruo.ai"
          width={703}
        />
        <ConstructionDiagram
          assetName="group-24099"
          className="obstruo-construction__diagram--horizontal"
          height={517}
          label="Konstrukcja poziomego logotypu Obstruo.ai"
          width={1368}
        />
        <ConstructionDiagram
          assetName="group-24100"
          className="obstruo-construction__diagram--stacked"
          height={828}
          label="Konstrukcja pionowego logotypu Obstruo.ai"
          width={1358}
        />
      </div>

      <span className="obstruo-construction__hint" id="obstruo-construction-hint">
        <span aria-hidden="true" />
        Najedź na wariant, aby odsłonić konstrukcję
      </span>
    </div>
  );
}
