import { v4Media as images } from "@/data/v4-media";
import type { PortfolioGalleryItem, PortfolioImage } from "@/types/case-study";
import type { IllustrationCollection } from "@/types/illustration";

const full = (src: PortfolioImage["src"], alt: string): PortfolioGalleryItem => ({ src, alt, layout: "full" });
const half = (src: PortfolioImage["src"], alt: string, spanRows?: number): PortfolioGalleryItem => ({ src, alt, layout: "half", spanRows });

export const caseStudyHeroes = {
  belloro: images.belloroHero,
  cloud9: images.cloud9Hero,
  formel7: images.formelHero,
  obstruo: images.obstruoHero,
} as const;

export const caseStudyGalleries = {
  belloro: [
    full(images.belloroStationery, "Papeteria i materiały marki Belloro"),
    half(images.belloroNecklace, "Złoty naszyjnik Belloro"),
    half(images.belloroRing, "Pierścionek w opakowaniu Belloro"),
    full(images.belloroVouchers, "Vouchery prezentowe Belloro"),
    half(images.belloroEnvelope, "Voucher i koperta Belloro"),
    half(images.belloroCards, "Karty podarunkowe z monogramem Belloro"),
  ],
  cloud9: [
    full(images.cloud9Tv, "Znak Cloud 9 na ekranie retro telewizora"),
    half(images.cloud9Shirts, "Odzież z identyfikacją Cloud 9"),
    half(images.cloud9Shirt, "Biała koszulka z symbolem Cloud 9"),
    full(images.cloud9Stage, "Identyfikacja Cloud 9 na scenie"),
    half(images.cloud9Bus, "Reklama Cloud 9 w przestrzeni miejskiej"),
    half(images.cloud9Signage, "Oznakowanie studia Cloud 9"),
    full(images.cloud9Bottles, "Bidony z symbolem Cloud 9"),
  ],
  obstruo: [
    full(images.obstruoShirt, "Koszulka z symbolem Obstruo.ai"),
    half(images.obstruoCards, "Identyfikatory Obstruo.ai"),
    half(images.obstruoSocks, "Akcesoria Obstruo.ai"),
    full(images.obstruoLaptop, "Key visual Obstruo.ai na ekranie laptopa"),
    half(images.obstruoBag, "Torba z identyfikacją Obstruo.ai"),
    half(images.obstruoBottles, "Bidony Obstruo.ai"),
    full(images.obstruoGuidelines, "Materiały systemu identyfikacji Obstruo.ai"),
    full(images.obstruoSignage, "Znak Obstruo.ai w przestrzeni miejskiej"),
  ],
  formel7: [
    full(images.formelWebsite, "Projekt strony internetowej Formel 7"),
    full(images.formelScreens, "Widoki i komponenty strony Formel 7"),
    half(images.formelStationery, "Materiały drukowane Formel 7"),
    half(images.formelPoster, "Identyfikacja Formel 7 na plakacie"),
    full(images.formelCampaign, "Kampania plakatowa Formel 7"),
    half(images.formelCards, "Wizytówki Formel 7"),
    half(images.formelCar, "Identyfikacja Formel 7 na samochodzie"),
    full(images.formelHoodie, "Bluza z identyfikacją Formel 7"),
  ],
} as const satisfies Record<string, readonly PortfolioGalleryItem[]>;

export const illustrationCollections = {
  wybrane: [
    { title: "Grzybek", year: "2022", images: [full(images.illustrationRedhead, "Rudowłosa bohaterka w bordowej palecie"), full(images.illustrationRedheadCards, "Ilustracja rudowłosej bohaterki na kartach")] },
    { title: "Kot", year: "2022", images: [full(images.illustrationWitch, "Ilustracja małej czarownicy"), full(images.illustrationWitchCards, "Ilustracja czarownicy na kartach")] },
    { title: "Dym", year: "2020", images: [half(images.illustrationPortrait, "Ilustracyjny portret kobiety", 2), half(images.illustrationPortraitCards, "Portret kobiety na kartach"), half(images.illustrationPortraitFlatlay, "Kolekcja kart z portretem kobiety")] },
    { title: "Papieros", year: "2019", images: [half(images.illustrationNight, "Portret postaci w nocnej, niebieskiej palecie"), half(images.illustrationNightCards, "Karty z portretem w niebieskiej palecie")] },
  ],
  okolicznosciowe: [
    { title: "Paulina & Damian", year: "2023", images: [full(images.occasionFamily, "Portret Pauliny i Damiana z psem"), full(images.occasionFamilyCards, "Portret Pauliny i Damiana na kartach")] },
    { title: "Ludwika & Mateusz", year: "2023", images: [full(images.occasionColorful, "Kolorowa ilustracja Ludwiki i Mateusza"), full(images.occasionColorfulCards, "Ilustracja Ludwiki i Mateusza na kartach")] },
    { title: "Connor & Ariana", year: "2024", images: [full(images.occasionYellow, "Ilustracja ślubna Connora i Ariany w szkockiej scenerii"), full(images.occasionYellowCards, "Ilustracja Connora i Ariany na kartach")] },
    { title: "Anna & Adam", year: "2024", images: [full(images.occasionDark, "Portret Anny i Adama w ciemnozielonej oprawie"), half(images.occasionDarkCards, "Karty z portretem Anny i Adama"), half(images.occasionDarkFlatlay, "Kolekcja kart Anny i Adama")] },
    { title: "Kasia & Dawid", year: "2025", images: [full(images.occasionParamedics, "Personalizowana ilustracja Kasi i Dawida"), full(images.occasionParamedicsFlatlay, "Ilustracja Kasi i Dawida na kartach")] },
    { title: "Kasia & Dawid", year: "2026", images: [full(images.occasionMint, "Miętowa ilustracja ślubna Kasi i Dawida"), full(images.occasionMintCards, "Ilustracja ślubna Kasi i Dawida na kartach")] },
  ],
  etykiety: [
    { title: "Łukasz", year: "2023", images: [full(images.labelsCollage, "Kolaż etykiet win inspirowanych postaciami historycznymi"), full(images.labelsBottles, "Butelki z historycznymi etykietami"), full(images.labelsFlatlay, "Historyczne etykiety w układzie flat lay")] },
    { title: "Gosia i Jacek", year: "2022", images: [full(images.labelsPortraits, "Butelki z personalizowanymi etykietami Gosi i Jacka"), full(images.labelsPortraitFlatlay, "Personalizowane etykiety portretowe Gosi i Jacka")] },
  ],
} as const satisfies Record<string, readonly IllustrationCollection[]>;

export const illustrationGalleries = {
  wybrane: illustrationCollections.wybrane.flatMap(({ images }) => images),
  okolicznosciowe: illustrationCollections.okolicznosciowe.flatMap(({ images }) => images),
  etykiety: illustrationCollections.etykiety.flatMap(({ images }) => images),
};
