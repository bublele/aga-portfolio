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
      aria-describedby="cloud9-construction-hint"
      aria-label={label}
      className={`cloud9-construction__diagram ${className}`}
      role="img"
      tabIndex={0}
    >
      {constructionLayers.map((layer) => (
        <Image
          alt=""
          aria-hidden="true"
          className={`cloud9-construction__layer cloud9-construction__layer--${layer}`}
          height={height}
          key={layer}
          sizes="(max-width: 720px) 90vw, 75vw"
          src={`/cloud9/${assetName}-${layer}.svg`}
          unoptimized
          width={width}
        />
      ))}
    </div>
  );
}

export function Cloud9LogoConstruction() {
  return (
    <div
      aria-labelledby="cloud9-construction-title cloud9-construction-description"
      className="cloud9-construction"
      role="group"
    >
      <span className="visually-hidden" id="cloud9-construction-title">
        Konstrukcja znaku Cloud 9
      </span>
      <span className="visually-hidden" id="cloud9-construction-description">
        Trzy oryginalne warianty sygnetu i logotypu Cloud 9 z animowanymi
        siatkami, liniami pomocniczymi i wymiarami.
      </span>

      <div className="cloud9-construction__board">
        <ConstructionDiagram
          assetName="group-24104"
          className="cloud9-construction__diagram--symbol"
          height={683}
          label="Konstrukcja podstawowego sygnetu Cloud 9"
          width={988}
        />
        <ConstructionDiagram
          assetName="16-glyph-2-1"
          className="cloud9-construction__diagram--horizontal"
          height={477}
          label="Konstrukcja poziomego logotypu Cloud 9"
          width={1348}
        />
        <ConstructionDiagram
          assetName="group-24106"
          className="cloud9-construction__diagram--stacked"
          height={773}
          label="Konstrukcja pionowego logotypu Cloud 9"
          width={1144}
        />
      </div>

      <span className="cloud9-construction__hint" id="cloud9-construction-hint">
        <span aria-hidden="true" />
        Najedź, aby odsłonić konstrukcję
      </span>
    </div>
  );
}
