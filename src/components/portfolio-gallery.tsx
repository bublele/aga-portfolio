import Image from "next/image";

import { BelloroLogoConstruction } from "@/components/belloro-logo-construction";
import { Cloud9LogoConstruction } from "@/components/cloud9-logo-construction";
import { Formel7LogoConstruction } from "@/components/formel7-logo-construction";
import { ObstruoLogoConstruction } from "@/components/obstruo-logo-construction";
import type { PortfolioGalleryItem } from "@/types/case-study";

type PortfolioGalleryProps = {
  interactiveLogoConstruction?: "belloro" | "cloud9" | "formel7" | "obstruo";
  items: readonly PortfolioGalleryItem[];
  label: string;
};

export function PortfolioGallery({
  items,
  label,
  interactiveLogoConstruction,
}: PortfolioGalleryProps) {
  return (
    <section aria-label={label} className="portfolio-gallery page-shell">
      {items.map((item, index) => (
        <figure
          className={`portfolio-gallery__item portfolio-gallery__item--${item.layout ?? "half"}`}
          key={`${item.src.src}-${index}`}
        >
          {interactiveLogoConstruction === "cloud9" && index === 0 ? (
            <Cloud9LogoConstruction />
          ) : interactiveLogoConstruction === "belloro" && index === 0 ? (
            <BelloroLogoConstruction />
          ) : interactiveLogoConstruction === "obstruo" && index === 0 ? (
            <ObstruoLogoConstruction />
          ) : interactiveLogoConstruction === "formel7" && index === 2 ? (
            <Formel7LogoConstruction />
          ) : (
            <Image
              alt={item.alt}
              placeholder="blur"
              sizes={
                item.layout === "full"
                  ? "(max-width: 1512px) 100vw, 1296px"
                  : "(max-width: 720px) 100vw, (max-width: 1512px) 50vw, 632px"
              }
              src={item.src}
            />
          )}
        </figure>
      ))}
    </section>
  );
}
