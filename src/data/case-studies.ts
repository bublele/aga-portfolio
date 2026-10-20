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
      "Cloud 9 to studio nagrań w Magazynie Sztuki na warszawskim Grochowie. Oferuje nagrania wokalne, miks i mastering oraz wynajem przestrzeni do samodzielnej pracy z dźwiękiem.",
      "Projekt obejmuje logo i materiały brandingowe. Prezentacja pokazuje konstrukcję sygnetu, poziomy i pionowy układ logotypu oraz wizualizacje zastosowań identyfikacji: od odzieży po oznakowanie i nośniki reklamowe.",
    ],
    storyTitle: "Identyfikacja\nstudia nagrań",
    identity: {
      title: "Akustyka, audio,\nCloud 9.",
      description:
        "Zaokrąglone linie tworzą zwarty, geometryczny sygnet. Znak występuje samodzielnie oraz w połączeniu z nazwą Cloud 9. Czerń, biel i szarość łączą poszczególne warianty identyfikacji.",
    },
    client: "Studio muzyczne",
    year: "2025",
    services: ["Logo Design", "Branding", "Visual Identity"],
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
      "Identyfikacja wizualna marki jubilerskiej Belloro — monogram, warianty znaku, papeteria i materiały prezentowe.",
    description: [
      "Belloro to marka jubilerska oferująca pierścionki zaręczynowe, obrączki ślubne i biżuterię ze złota. Jej oferta łączy tradycyjne złotnictwo ze współczesnymi wzorami.",
      "Projekt obejmuje logo i materiały brandingowe. W prezentacji monogramowi towarzyszą logotyp, warianty kolorystyczne oraz wizualizacje papeterii, voucherów i opakowań prezentowych.",
    ],
    storyTitle: "Identyfikacja\nmarki jubilerskiej",
    identity: {
      title: "Litera, kwiat,\nornament.",
      description:
        "Symetryczne linie monogramu układają się w literę B i dekoracyjną, roślinną formę. Sygnet występuje samodzielnie oraz obok logotypu. Stonowana paleta i złote wykończenia pojawiają się w wizualizacjach materiałów marki.",
    },
    client: "Salon Jubilerski",
    year: "2024",
    services: ["Logo Design", "Branding", "Visual Identity"],
    cover: {
      src: media.belloroCover,
      alt: "Złoty monogram Belloro na fakturowanym papierze",
    },
    hero: {
      src: caseStudyHeroes.belloro,
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
      "Logo i materiały identyfikacji wizualnej Obstruo.ai — platformy zarządzania zasadami działania modeli, agentów i narzędzi AI.",
    description: [
      "Obstruo.ai to platforma AI governance, która pozwala organizacjom określać i egzekwować zasady działania modeli, agentów i narzędzi AI. Łączy kontrolę dostępu i przetwarzania danych z rejestrowaniem decyzji systemu.",
      "Projekt logo i materiałów brandingowych zrealizowany za pośrednictwem agencji IDgroup Team. Prezentacja zestawia płaskie warianty znaku z jego przestrzenną, szklaną interpretacją oraz wizualizacjami materiałów marki.",
    ],
    storyTitle: "Znak dla\nplatformy AI",
    identity: {
      title: "Moduł, geometria,\nprzestrzeń.",
      description:
        "Sygnet składa się z geometrycznych modułów, które tworzą wspólną, zwartą formę. Prezentacja pokazuje znak w wersji płaskiej i przestrzennej oraz jego zestawienie z logotypem Obstruo.ai. Paleta łączy fiolet, czerń i biel.",
    },
    client: "Platforma AI governance",
    year: "2026",
    services: ["Logo Design", "Branding", "Visual Identity"],
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
      "Formel7 oferuje mobilny detailing samochodowy w Zurychu i okolicach. Usługi pielęgnacji wnętrza i nadwozia realizuje na miejscu, pod adresem wskazanym przez klienta.",
      "Projekt obejmuje logo, design strony internetowej i materiały brandingowe. Prezentacja pokazuje konstrukcję znaku, projekty widoków strony oraz wizualizacje identyfikacji na materiałach drukowanych, odzieży i samochodzie.",
    ],
    storyTitle: "Identyfikacja\ni projekt strony",
    identity: {
      title: "Geometria,\nkierunek, detal.",
      description:
        "Kanciaste formy łączą literę F i cyfrę 7 w jeden sygnet. Znak występuje samodzielnie oraz w poziomym logotypie. Kontrast jasnych i ciemnych elementów z niebieskim akcentem powraca w projektach strony i materiałów marki.",
    },
    client: "Car detailing",
    year: "2025",
    services: ["Logo Design", "Web Design", "Branding", "Visual Identity"],
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
