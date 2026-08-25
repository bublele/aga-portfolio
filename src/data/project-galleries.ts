import belloroJewelry1 from "@/assets/images/belloro-jewelry-1.webp";
import belloroJewelry2 from "@/assets/images/belloro-jewelry-2.webp";
import belloroJewelry3 from "@/assets/images/belloro-jewelry-3.webp";
import formelCover from "@/assets/images/formel-cover.webp";
import cloud9Hero from "@/assets/project-sections/cloud9/01-hero-logo.webp";
import cloud9LogoSystem from "@/assets/project-sections/cloud9/02-logo-system.webp";
import cloud9Stage from "@/assets/project-sections/cloud9/03-stage-signage.webp";
import cloud9Merch from "@/assets/project-sections/cloud9/04-merch-and-bottles.webp";
import cloud9Screen from "@/assets/project-sections/cloud9/05-retro-screen.webp";
import cloud9Glass from "@/assets/project-sections/cloud9/06-glass-panels.webp";
import cloud9BusStop from "@/assets/project-sections/cloud9/07-bus-stop.webp";
import cloud9Applications from "@/assets/project-sections/cloud9/08-brand-applications.webp";
import belloroLogoSystem from "@/assets/project-sections/belloro/belloro-logo-construction.webp";
import belloroPalette from "@/assets/project-sections/belloro/belloro-logo-palette.webp";
import belloroStationery from "@/assets/project-sections/belloro/belloro-stationery-scene.webp";
import belloroVouchers from "@/assets/project-sections/belloro/belloro-vouchers-scene.webp";
import labelsCollage from "@/assets/project-sections/etykiety/01-label-collage.webp";
import labelsBottles from "@/assets/project-sections/etykiety/02-bottle-lineup.webp";
import labelsFlatlay from "@/assets/project-sections/etykiety/03-labels-flatlay.webp";
import portraitBottles from "@/assets/project-sections/etykiety/04-portrait-bottles.webp";
import portraitLabels from "@/assets/project-sections/etykiety/05-portrait-labels-flatlay.webp";
import formelHero from "@/assets/project-sections/formel7/01-hero.webp";
import formelGrille from "@/assets/project-sections/formel7/02-grille-emblem.webp";
import formelLogoSystem from "@/assets/project-sections/formel7/03-logo-construction.webp";
import formelWebsite from "@/assets/project-sections/formel7/04-website-showcase.webp";
import formelCollateral from "@/assets/project-sections/formel7/05-brand-collateral.webp";
import formelPosters from "@/assets/project-sections/formel7/06-poster-gallery.webp";
import formelVehicle from "@/assets/project-sections/formel7/07-vehicle-campaign.webp";
import formelApplications from "@/assets/project-sections/formel7/08-brand-applications.webp";
import obstruoHero from "@/assets/project-sections/obstruo/01-hero-mark.webp";
import obstruoLogoSystem from "@/assets/project-sections/obstruo/02-logo-construction.webp";
import obstruoShirt from "@/assets/project-sections/obstruo/03-branded-tshirt.webp";
import obstruoPasses from "@/assets/project-sections/obstruo/04-passes-and-socks.webp";
import obstruoLaptop from "@/assets/project-sections/obstruo/05-laptop-visual.webp";
import obstruoMerch from "@/assets/project-sections/obstruo/06-merchandise.webp";
import obstruoGuidelines from "@/assets/project-sections/obstruo/07-brand-guidelines.webp";
import obstruoSignage from "@/assets/project-sections/obstruo/08-outdoor-signage.webp";
import occasionYellow from "@/assets/project-sections/okolicznosciowe/01-yellow-wedding.webp";
import occasionColorful from "@/assets/project-sections/okolicznosciowe/02-colorful-wedding.webp";
import occasionMint from "@/assets/project-sections/okolicznosciowe/03-mint-wedding.webp";
import occasionCouple from "@/assets/project-sections/okolicznosciowe/04-dark-green-couple.webp";
import occasionFamily from "@/assets/project-sections/okolicznosciowe/05-family-portrait.webp";
import occasionParamedics from "@/assets/project-sections/okolicznosciowe/06-paramedic-couple.webp";
import selectedRedhead from "@/assets/project-sections/wybrane/01-redhead-character.webp";
import selectedRedheadCards from "@/assets/project-sections/wybrane/02-redhead-cards.webp";
import selectedNight from "@/assets/project-sections/wybrane/03-night-portrait.webp";
import selectedWitch from "@/assets/project-sections/wybrane/04-witch-character.webp";
import selectedWitchCards from "@/assets/project-sections/wybrane/05-witch-cards.webp";
import selectedDoublePortrait from "@/assets/project-sections/wybrane/06-double-portrait.webp";
import type { PortfolioGalleryItem, PortfolioImage } from "@/types/case-study";

const full = (src: PortfolioImage["src"], alt: string): PortfolioGalleryItem => ({
  alt,
  layout: "full",
  src,
});

const half = (src: PortfolioImage["src"], alt: string): PortfolioGalleryItem => ({
  alt,
  layout: "half",
  src,
});

export const caseStudyHeroes = {
  cloud9: cloud9Hero,
  formel7: formelHero,
  obstruo: obstruoHero,
} as const;

export const caseStudyGalleries = {
  cloud9: [
    full(cloud9LogoSystem, "Konstrukcja i proporcje znaku Cloud 9"),
    full(cloud9Stage, "Identyfikacja Cloud 9 na ekranie sceny"),
    full(cloud9Merch, "Odzież i bidony z identyfikacją Cloud 9"),
    full(cloud9Screen, "Znak Cloud 9 na ekranie retro telewizora"),
    full(cloud9Glass, "System znaku Cloud 9 na szklanych panelach"),
    full(cloud9BusStop, "Reklama Cloud 9 w przestrzeni miejskiej"),
    full(cloud9Applications, "Warianty znaku i zastosowania Cloud 9"),
  ],
  belloro: [
    full(belloroLogoSystem, "Konstrukcja monogramu i logotypu Belloro"),
    full(belloroVouchers, "Vouchery prezentowe Belloro"),
    full(belloroStationery, "Papeteria i materiały marki Belloro"),
    full(belloroJewelry1, "Złoty monogram Belloro"),
    full(belloroJewelry2, "Biżuteria oraz opakowanie Belloro"),
    full(belloroJewelry3, "Znak Belloro we wnętrzu salonu"),
    full(belloroPalette, "Warianty kolorystyczne monogramu Belloro"),
  ],
  obstruo: [
    full(obstruoLogoSystem, "Konstrukcja znaku i logotypu Obstruo.ai"),
    full(obstruoShirt, "Koszulka z symbolem Obstruo.ai"),
    full(obstruoPasses, "Identyfikatory i akcesoria Obstruo.ai"),
    full(obstruoLaptop, "Key visual Obstruo.ai na ekranie laptopa"),
    full(obstruoMerch, "Torby i bidony z identyfikacją Obstruo.ai"),
    full(obstruoGuidelines, "Materiały systemu identyfikacji Obstruo.ai"),
    full(obstruoSignage, "Znak Obstruo.ai w przestrzeni miejskiej"),
  ],
  formel7: [
    half(formelGrille, "Znak Formel7 na atrapie samochodu"),
    half(formelCover, "Bluza z identyfikacją Formel7"),
    full(formelLogoSystem, "Konstrukcja znaku i logotypu Formel7"),
    full(formelWebsite, "Projekt strony internetowej Formel7"),
    full(formelCollateral, "Materiały drukowane Formel7"),
    full(formelPosters, "Kampania plakatowa Formel7"),
    full(formelVehicle, "Identyfikacja Formel7 na materiałach i samochodzie"),
    full(formelApplications, "Warianty znaku i odzież Formel7"),
  ],
} as const satisfies Record<string, readonly PortfolioGalleryItem[]>;

export const illustrationGalleries = {
  wybrane: [
    full(selectedRedhead, "Rudowłosa bohaterka w bordowej palecie"),
    full(selectedRedheadCards, "Zastosowanie ilustracji na kartach"),
    full(selectedNight, "Portret postaci w nocnej, niebieskiej palecie"),
    full(selectedWitch, "Ilustracja małej czarownicy"),
    full(selectedWitchCards, "Zastosowanie ilustracji czarownicy na kartach"),
    full(selectedDoublePortrait, "Portret kobiety i materiały kolekcjonerskie"),
  ],
  okolicznosciowe: [
    full(occasionYellow, "Personalizowana ilustracja ślubna w szkockiej scenerii"),
    full(occasionColorful, "Kolorowa ilustracja pary młodej"),
    full(occasionMint, "Miętowa ilustracja ślubna"),
    full(occasionCouple, "Portret pary w ciemnozielonej oprawie"),
    full(occasionFamily, "Rodzinny portret z psem"),
    full(occasionParamedics, "Ilustracja pary ratowników medycznych"),
  ],
  etykiety: [
    half(labelsCollage, "Kolaż historycznych etykiet win"),
    half(labelsBottles, "Seria butelek z historycznymi etykietami"),
    half(labelsFlatlay, "Etykiety win przedstawione w układzie flat lay"),
    half(portraitBottles, "Butelki z personalizowanymi etykietami portretowymi"),
    half(portraitLabels, "Personalizowane etykiety portretowe"),
  ],
} as const satisfies Record<string, readonly PortfolioGalleryItem[]>;
