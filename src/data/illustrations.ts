import { media } from "@/data/media";
import { illustrationCollections, illustrationGalleries } from "@/data/project-galleries";
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
    eyebrow: "Ilustracje po godzinach",
    summary:
      "Selekcja ilustracji, w których charakter postaci, kolor i detal budują własny, rozpoznawalny świat.",
    description: [
      "Twórczość to dla mnie nie tylko praca komercyjna, ale też ciągła potrzeba eksperymentowania z formą, kolorem i kreską. W tej sekcji zebrałam moje prywatne, autorskie ilustracje – projekty tworzone bez narzuconych ram i wytycznych.",
      "To przestrzeń pełna swobody artystycznej, w której testuję nowe style i techniki. Każda z tych prac pokazuje moje osobiste spojrzenie na ilustrację i stanowi naturalne zaplecze dla pomysłów, które później wykorzystuję w projektach dla klientów.",
    ],
    image: {
      src: media.illustrationSelected,
      alt: "Autorska ilustracja rudowłosej postaci w bordowej palecie",
    },
    gallery: illustrationGalleries.wybrane,
    collections: illustrationCollections.wybrane,
    year: "2019—2024",
    services: ["Ilustracje"],
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
    collections: illustrationCollections.okolicznosciowe,
    year: "2022—2026",
    services: ["Projekt", "Wydruk"],
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
    collections: illustrationCollections.etykiety,
    year: "2022—2023",
    services: ["Projekt", "Wydruk"],
  },
];

export function getIllustration(slug: string): IllustrationProject | undefined {
  return illustrations.find((illustration) => illustration.slug === slug);
}
