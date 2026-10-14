import Image from "next/image";

import styles from "@/components/portfolio-detail.module.css";
import type { PortfolioGalleryItem } from "@/types/case-study";

type PortfolioGalleryProps = {
  items: readonly PortfolioGalleryItem[];
  label: string;
};

export function PortfolioGallery({ items, label }: PortfolioGalleryProps) {
  return (
    <section aria-label={label} className={styles.gallery}>
      {items.map((item, index) => (
        <figure
          className={`${styles.galleryItem} ${item.layout === "full" ? styles.full : ""} ${item.spanRows === 2 ? styles.twoRows : ""}`}
          key={`${item.src.src}-${index}`}
        >
          <Image
            alt={item.alt}
            placeholder="blur"
            sizes={item.layout === "full"
              ? "(max-width: 720px) calc(100vw - 48px), (max-width: 1512px) 86vw, 1296px"
              : "(max-width: 720px) calc(100vw - 48px), (max-width: 1512px) 43vw, 632px"}
            src={item.src}
          />
        </figure>
      ))}
    </section>
  );
}
