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
      aria-describedby="belloro-construction-hint"
      aria-label={label}
      className={`belloro-construction__diagram ${className}`}
      role="img"
      tabIndex={0}
    >
      {constructionLayers.map((layer) => (
        <Image
          alt=""
          aria-hidden="true"
          className={`belloro-construction__layer belloro-construction__layer--${layer}`}
          height={height}
          key={layer}
          sizes="(max-width: 720px) 90vw, 75vw"
          src={`/belloro/${assetName}-${layer}.svg`}
          unoptimized
          width={width}
        />
      ))}
    </div>
  );
}

export function BelloroLogoConstruction() {
  return (
    <div
      aria-labelledby="belloro-construction-title belloro-construction-description"
      className="belloro-construction"
      role="group"
    >
      <span className="visually-hidden" id="belloro-construction-title">
        Konstrukcja znaku Belloro
      </span>
      <span className="visually-hidden" id="belloro-construction-description">
        Trzy oryginalne warianty sygnetu i logotypu Belloro z animowanymi
        siatkami, liniami pomocniczymi i wymiarami.
      </span>

      <div className="belloro-construction__board">
        <ConstructionDiagram
          assetName="group-1753"
          className="belloro-construction__diagram--symbol"
          height={763}
          label="Konstrukcja sygnetu Belloro"
          width={720}
        />
        <ConstructionDiagram
          assetName="group-24096"
          className="belloro-construction__diagram--horizontal"
          height={680}
          label="Konstrukcja poziomego logotypu Belloro"
          width={1308}
        />
        <ConstructionDiagram
          assetName="group-24097"
          className="belloro-construction__diagram--stacked"
          height={736}
          label="Konstrukcja pionowego logotypu Belloro"
          width={718}
        />
      </div>

      <span className="belloro-construction__hint" id="belloro-construction-hint">
        <span aria-hidden="true" />
        Najedź na wariant, aby odsłonić konstrukcję
      </span>
    </div>
  );
}
