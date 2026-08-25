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
      aria-describedby="clouds-construction-hint"
      aria-label={label}
      className={`clouds-construction__diagram ${className}`}
      role="img"
      tabIndex={0}
    >
      {constructionLayers.map((layer) => (
        <Image
          alt=""
          aria-hidden="true"
          className={`clouds-construction__layer clouds-construction__layer--${layer}`}
          height={height}
          key={layer}
          sizes="(max-width: 720px) 90vw, 75vw"
          src={`/clouds/${assetName}-${layer}.svg`}
          unoptimized
          width={width}
        />
      ))}
    </div>
  );
}

export function CloudsLogoConstruction() {
  return (
    <div
      aria-labelledby="clouds-construction-title clouds-construction-description"
      className="clouds-construction"
      role="group"
    >
      <span className="visually-hidden" id="clouds-construction-title">
        Konstrukcja znaku Cloud 9
      </span>
      <span className="visually-hidden" id="clouds-construction-description">
        Trzy oryginalne warianty sygnetu i logotypu Cloud 9 z animowanymi
        siatkami, liniami pomocniczymi i wymiarami.
      </span>

      <div className="clouds-construction__board">
        <ConstructionDiagram
          assetName="group-24104"
          className="clouds-construction__diagram--symbol"
          height={683}
          label="Konstrukcja podstawowego sygnetu Cloud 9"
          width={988}
        />
        <ConstructionDiagram
          assetName="16-glyph-2-1"
          className="clouds-construction__diagram--horizontal"
          height={477}
          label="Konstrukcja poziomego logotypu Cloud 9"
          width={1348}
        />
        <ConstructionDiagram
          assetName="group-24106"
          className="clouds-construction__diagram--stacked"
          height={773}
          label="Konstrukcja pionowego logotypu Cloud 9"
          width={1144}
        />
      </div>

      <span className="clouds-construction__hint" id="clouds-construction-hint">
        <span aria-hidden="true" />
        Najedź, aby odsłonić konstrukcję
      </span>
    </div>
  );
}
