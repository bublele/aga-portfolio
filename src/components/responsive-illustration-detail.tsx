import Link from "next/link";

import { ContactFooter } from "@/components/contact-footer";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import styles from "@/components/portfolio-detail.module.css";
import { keepPolishWordsTogether } from "@/lib/typography";
import type { IllustrationProject } from "@/types/illustration";

export function IllustrationDetail({ illustration }: { illustration: IllustrationProject }) {
  const selected = illustration.slug === "wybrane";
  const collections = illustration.collections ?? [{ images: illustration.gallery }];

  return (
    <article className={styles.project}>
      <div className={styles.surface}>
        <Link className={styles.back} href="/#projekty">← Portfolio</Link>
        <div className={`page-shell ${selected ? styles.selectedContent : ""}`}>
          <header className={`${styles.intro} ${styles.illustrationIntro} ${selected ? styles.selectedIntro : ""}`}>
            <p className={styles.year}>Lata: {illustration.year.replace("—", " – ")}</p>
            <h1>{keepPolishWordsTogether(illustration.shortTitle)}</h1>
            <p className={styles.subtitle}>{keepPolishWordsTogether(illustration.eyebrow)}</p>
            <div className={styles.description}>
              {illustration.description.map((paragraph, index) => (
                <p className={index === 1 ? styles.lead : undefined} key={paragraph}>{keepPolishWordsTogether(paragraph)}</p>
              ))}
            </div>
            <div className={styles.scope}>
              <strong>Zakres prac:</strong>
              <ul>{illustration.services.map((service) => <li key={service}>{keepPolishWordsTogether(service)}</li>)}</ul>
            </div>
          </header>
          <div className={styles.collections}>
            {collections.map((collection, index) => (
              <section aria-label={collection.title ?? `Ilustracje — zestaw ${index + 1}`} className={styles.collection} key={`${illustration.slug}-${index}`}>
                {collection.title && (
                  <header className={styles.collectionHeading}>
                    {collection.year && <p className={styles.year}>Rok: {collection.year}</p>}
                    <h2>{keepPolishWordsTogether(collection.title)}</h2>
                  </header>
                )}
                <PortfolioGallery items={collection.images} label={`Galeria ${collection.title ?? illustration.title}`} />
              </section>
            ))}
          </div>
        </div>
      </div>
      <ContactFooter />
    </article>
  );
}
