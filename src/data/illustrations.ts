import { media } from "@/data/media";
import { illustrationGalleries } from "@/data/project-galleries";
import type { IllustrationProject } from "@/types/illustration";

const illustrationDescription = [
  "Poza klasycznym brandingiem i projektowaniem stron internetowych, ważną częścią mojej twórczości pozostają ilustracje wektorowe i inne. W tej sekcji zebrałam moje autorskie prace — znajdziesz tu zarówno komercyjne projekty realizowane na indywidualne zamówienie, jak i niezależne realizacje tworzone z pasji do grafiki.",
  "Moje portfolio uzupełniają również bardziej nieszablonowe formy graficzne. Zajmuję się projektowaniem unikalnych opakowań — w tym eleganckich etykiet na wina — a także tworzeniem zaawansowanych fotomontaży, które pozwalają mi budować wielowymiarowe, artystyczne kompozycje idealnie dopasowane do wizji klienta.",
] as const;

export const illustrations: readonly IllustrationProject[] = [
  {
    slug: "wybrane",
    title: "Wybrane ilustracje",
    shortTitle: "Wybrane",
    eyebrow: "Autorskie ilustracje",
    summary:
      "Selekcja ilustracji, w których charakter postaci, kolor i detal budują własny, rozpoznawalny świat.",
    description: illustrationDescription,
    image: {
      src: media.illustrationSelected,
      alt: "Autorska ilustracja rudowłosej postaci w bordowej palecie",
    },
    gallery: illustrationGalleries.wybrane,
    year: "2024—2026",
    services: ["Ilustracja", "Character design", "Art direction"],
  },
  {
    slug: "okolicznosciowe",
    title: "Ilustracje okolicznościowe",
    shortTitle: "Okolicznościowe",
    eyebrow: "Historie na wyjątkowe momenty",
    summary:
      "Personalizowane kompozycje tworzone dla konkretnych osób, miejsc i ważnych chwil.",
    description: illustrationDescription,
    image: {
      src: media.illustrationOccasion,
      alt: "Personalizowana ilustracja ślubna pary w szkockiej scenerii",
    },
    gallery: illustrationGalleries.okolicznosciowe,
    year: "2025",
    services: ["Ilustracja", "Personalizacja", "Print design"],
  },
  {
    slug: "etykiety",
    title: "Etykiety i opakowania",
    shortTitle: "Etykiety",
    eyebrow: "Ilustracja w identyfikacji",
    summary:
      "Ilustracyjne etykiety, które łączą narrację produktu z czytelnym systemem informacji i charakterem marki.",
    description: illustrationDescription,
    image: {
      src: media.illustrationLabels,
      alt: "Ilustracyjne etykiety na wino inspirowane postaciami historycznymi",
    },
    gallery: illustrationGalleries.etykiety,
    year: "2024",
    services: ["Packaging", "Ilustracja", "DTP"],
  },
];

export function getIllustration(slug: string): IllustrationProject | undefined {
  return illustrations.find((illustration) => illustration.slug === slug);
}
