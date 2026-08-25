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
      aria-describedby="formel-construction-hint"
      aria-label={label}
      className={`formel-construction__diagram ${className}`}
      role="img"
      tabIndex={0}
    >
      {constructionLayers.map((layer) => (
        <Image
          alt=""
          aria-hidden="true"
          className={`formel-construction__layer formel-construction__layer--${layer}`}
          height={height}
          key={layer}
          sizes="(max-width: 720px) 90vw, 75vw"
          src={`/formel7/${assetName}-${layer}.svg`}
          unoptimized
          width={width}
        />
      ))}
    </div>
  );
}

export function Formel7LogoConstruction() {
  return (
    <div
      aria-labelledby="formel-construction-title formel-construction-description"
      className="formel-construction"
      role="group"
    >
      <span className="visually-hidden" id="formel-construction-title">
        Konstrukcja znaku Formel 7
      </span>
      <span className="visually-hidden" id="formel-construction-description">
        Dwa oryginalne warianty sygnetu i logotypu Formel 7 z animowanymi
        siatkami, liniami pomocniczymi i wymiarami.
      </span>

      <div className="formel-construction__board">
        <ConstructionDiagram
          assetName="group-24101"
          className="formel-construction__diagram--symbol"
          height={911}
          label="Konstrukcja sygnetu Formel 7"
          width={1023}
        />
        <ConstructionDiagram
          assetName="group-24103"
          className="formel-construction__diagram--horizontal"
          height={361}
          label="Konstrukcja poziomego logotypu Formel 7"
          width={1378}
        />
      </div>

      <span className="formel-construction__hint" id="formel-construction-hint">
        <span aria-hidden="true" />
        Najedź na wariant, aby odsłonić konstrukcję
      </span>
    </div>
  );
}
