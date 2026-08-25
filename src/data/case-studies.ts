import { media } from "@/data/media";
import { caseStudyGalleries, caseStudyHeroes } from "@/data/project-galleries";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "cloud9",
    title: "Cloud 9",
    seoTitle: "Cloud 9 — identyfikacja wizualna studia muzycznego",
    displayTitle: "CLOUD 9",
    category: "Brand identity",
    summary:
      "Identyfikacja wizualna studia muzycznego Cloud 9 — od konstrukcji znaku po materiały brandingowe i zastosowania w przestrzeni.",
    description: [
      "Studio Cloud 9 to profesjonalna przestrzeń na muzycznej mapie Warszawy, stworzona z myślą o kompleksowej realizacji nagrań i produkcji dźwięku. Miejsce to wyróżnia się klimatem, który sprzyja pracy twórczej artystów.",
      "W ramach współpracy opracowano projekt logo oraz zestaw podstawowych materiałów brandingowych. Kontakt z zespołem Cloud 9 pozwolił na sprawne i precyzyjne dopracowanie koncepcji, a sam proces przebiegał płynnie i w bardzo dobrej, twórczej atmosferze.",
    ],
    client: "Studio muzyczne",
    year: "2025",
    services: ["Projekt logo", "Materiały brandingowe"],
    cover: {
      src: media.cloud9Cover,
      alt: "Znak Cloud 9 wyświetlony na ekranie retro telewizora",
    },
    hero: {
      src: caseStudyHeroes.cloud9,
      alt: "Świetlny znak Cloud 9 na ciemnym tle",
    },
    gallery: caseStudyGalleries.cloud9,
    theme: "cloud9",
    accent: "#ff563f",
    monogram: "S",
  },
  {
    slug: "belloro",
    title: "Belloro",
    seoTitle: "Belloro — branding i identyfikacja salonu jubilerskiego",
    displayTitle: "Belloro",
    category: "Luxury branding / jewellery",
    summary:
      "Kompleksowy branding salonu jubilerskiego — od subtelnego monogramu po elegancki system opakowań i materiałów sprzedażowych.",
    description: [
      "Belloro to wyjątkowy salon jubilerski, oferujący biżuterię najwyższej jakości, która łączy ponadczasową klasykę z nowoczesnym designem.",
      "W ramach współpracy opracowano kompleksową identyfikację wizualną, oddającą luksusowy, a zarazem przystępny charakter marki. Proces projektowy poprzedzono analizą wartości firmy, co pozwoliło stworzyć logo idealnie rezonujące z jej filozofią. Dzięki płynnej komunikacji i wzajemnemu zaufaniu precyzyjnie dopracowano każdy detal. Nowy wizerunek wyróżnia Belloro na rynku i stanowi solidny fundament do dalszego rozwoju.",
    ],
    client: "Salon Jubilerski",
    year: "2024",
    services: ["Projekt logo", "Materiały brandingowe"],
    cover: {
      src: media.belloroCover,
      alt: "Złoty monogram Belloro na fakturowanym papierze",
    },
    hero: {
      src: media.belloroHero,
      alt: "Logotyp Belloro na fakturowanym, beżowym tle",
    },
    gallery: caseStudyGalleries.belloro,
    theme: "belloro",
    accent: "#a18d7f",
    monogram: "B",
  },
  {
    slug: "obstruo",
    title: "Obstruo.ai",
    seoTitle: "Obstruo.ai — branding i identyfikacja produktu AI",
    displayTitle: "Obstruo.ai",
    category: "AI product / visual identity",
    summary:
      "Nowoczesna identyfikacja wizualna dla neutralnej warstwy kontrolnej sztucznej inteligencji.",
    description: [
      "Obstruo.ai to zaawansowane rozwiązanie technologiczne — neutralna warstwa kontrolna (control plane) dla sztucznej inteligencji, pozwalająca przedsiębiorstwom na swobodne zarządzanie ruchem modeli LLM i serwerów MCP.",
      "Na potrzeby projektu stworzono nowoczesne logo, oddające innowacyjny charakter marki. Zarówno koncepcja, jak i jej wizualne wykonanie to w pełni autorska realizacja, przeprowadzona za pośrednictwem agencji IDgroup Team.",
    ],
    client: "Operating system",
    year: "2024",
    services: ["Projekt logo", "Materiały brandingowe"],
    cover: {
      src: media.obstruoCover,
      alt: "Fioletowy szklany znak Obstruo.ai w przestrzeni 3D",
    },
    hero: {
      src: caseStudyHeroes.obstruo,
      alt: "Przestrzenny znak Obstruo.ai na czarnym tle",
    },
    gallery: caseStudyGalleries.obstruo,
    theme: "obstruo",
    accent: "#8e5cff",
    monogram: "O",
  },
  {
    slug: "formel7",
    title: "Formel7",
    seoTitle: "Formel7 — identyfikacja wizualna marki car detailing",
    displayTitle: "Formel 7",
    category: "Brand identity / automotive",
    summary:
      "Identyfikacja wizualna szwajcarskiej marki mobilnego detailingu samochodowego klasy premium.",
    description: [
      "Formel 7 to szwajcarska marka z Zurychu, która świadczy usługi mobilnego detailingu samochodowego klasy premium. Wyróżnia ją dbałość o najmniejsze detale, innowacyjne podejście do pielęgnacji pojazdów oraz pasja do perfekcji.",
      "W ramach współpracy zadbano o profesjonalny wizerunek firmy. Opracowano nowoczesne logo, bazowe materiały brandingowe i w pełni funkcjonalną stronę internetową. Partnerskie podejście klienta umożliwiło precyzyjne dopasowanie koncepcji wizualnej, a realizacja przebiegała w znakomitej, twórczej atmosferze.",
    ],
    client: "Car detailing",
    year: "2024",
    services: ["Projekt logo", "Projekt strony internetowej", "Materiały brandingowe"],
    cover: {
      src: media.formelCover,
      alt: "Czarno-niebieska bluza z logo Formel7",
    },
    hero: {
      src: caseStudyHeroes.formel7,
      alt: "Znak Formel7 na tle wnętrza samochodu",
    },
    gallery: caseStudyGalleries.formel7,
    theme: "formel",
    accent: "#2caeff",
    monogram: "F7",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
