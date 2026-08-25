import Link from "next/link";

import { ContactFooter } from "@/components/contact-footer";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import type { IllustrationProject } from "@/types/illustration";

type IllustrationDetailProps = {
  illustration: IllustrationProject;
};

export function IllustrationDetail({ illustration }: IllustrationDetailProps) {
  return (
    <article className="illustration-detail-html">
      <Link className="portfolio-back" href="/illustrations">
        <span aria-hidden="true">←</span> Wszystkie projekty
      </Link>

      <header className="illustration-detail-html__intro page-shell">
        <p className="eyebrow">{illustration.eyebrow}</p>
        <h1>{illustration.shortTitle}</h1>
        <div className="illustration-detail-html__description">
          {illustration.description.map((paragraph, index) => (
            <p
              className={index === 1 ? "illustration-detail-html__lead" : undefined}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      <PortfolioGallery
        items={illustration.gallery}
        label={`Galeria projektu ${illustration.title}`}
      />
      <ContactFooter />
    </article>
  );
}
