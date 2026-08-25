import type { PortfolioGalleryItem, PortfolioImage } from "@/types/case-study";

export type IllustrationProject = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: readonly string[];
  image: PortfolioImage;
  gallery: readonly PortfolioGalleryItem[];
  shortTitle: string;
  year: string;
  services: readonly string[];
};
