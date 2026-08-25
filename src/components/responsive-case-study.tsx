import Image from "next/image";
import Link from "next/link";

import { ContactFooter } from "@/components/contact-footer";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const hero = caseStudy.hero ?? caseStudy.cover;

  return (
    <article className={`case-detail-html case-detail-html--${caseStudy.theme}`}>
      <Link className="portfolio-back" href="/case-studies">
        <span aria-hidden="true">←</span> Wszystkie projekty
      </Link>

      <div className="case-detail-html__hero">
        <Image
          alt={hero.alt}
          fill
          placeholder="blur"
          preload
          sizes="100vw"
          src={hero.src}
        />
      </div>

      <header className="case-detail-html__intro page-shell">
        <div className="case-detail-html__copy">
          <p className="eyebrow">{caseStudy.category}</p>
          <h1>{caseStudy.displayTitle}</h1>
          <p className="case-detail-html__client">{caseStudy.client}</p>
          <div className="case-detail-html__description">
            {caseStudy.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="case-detail-html__scope">
            <strong>Zakres prac:</strong>
            <ul>
              {caseStudy.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="case-detail-html__cover">
          <Image
            alt={caseStudy.cover.alt}
            placeholder="blur"
            sizes="(max-width: 720px) 100vw, 38vw"
            src={caseStudy.cover.src}
          />
        </figure>
      </header>

      <PortfolioGallery
        interactiveLogoConstruction={
          caseStudy.slug === "belloro" ||
          caseStudy.slug === "clouds" ||
          caseStudy.slug === "formel7" ||
          caseStudy.slug === "obstruo"
            ? caseStudy.slug
            : undefined
        }
        items={caseStudy.gallery}
        label={`Galeria projektu ${caseStudy.displayTitle}`}
      />
      <ContactFooter />
    </article>
  );
}
