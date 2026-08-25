import type { StaticImageData } from "next/image";

export type PortfolioImage = {
  src: StaticImageData;
  alt: string;
};

export type PortfolioGalleryItem = PortfolioImage & {
  layout?: "full" | "half";
};

export type CaseStudySection = {
  id: string;
  eyebrow?: string;
  title: string;
  body: string;
  image?: PortfolioImage;
  images?: readonly PortfolioImage[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  seoTitle: string;
  displayTitle: string;
  category: string;
  summary: string;
  description: readonly string[];
  client: string;
  year: string;
  services: readonly string[];
  cover: PortfolioImage;
  gallery: readonly PortfolioGalleryItem[];
  hero?: PortfolioImage;
  theme: "clouds" | "belloro" | "obstruo" | "formel";
  accent: string;
  monogram: string;
};
