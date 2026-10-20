import type { Metadata } from "next";
import Link from "next/link";

import { ContactFooter } from "@/components/contact-footer";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { caseStudies } from "@/data/case-studies";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { keepPolishWordsTogether } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Case studies — branding i identyfikacja wizualna",
  description:
    "Case studies projektów Cloud 9, Belloro, Obstruo.ai i Formel7 — branding, logo, packaging i systemy identyfikacji Agnieszki Zobel.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    title: "Case studies — branding i identyfikacja wizualna",
    description:
      "Cztery systemy identyfikacji zaprojektowane przez Agnieszkę Zobel.",
    url: "/case-studies",
    locale: siteConfig.locale,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Case studies — portfolio Agnieszki Zobel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case studies — branding i identyfikacja wizualna",
    description: "Cztery systemy identyfikacji zaprojektowane przez Agnieszkę Zobel.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Case studies — Agnieszka Zobel",
          description: "Wybrane projekty brandingowe i systemy identyfikacji wizualnej.",
          url: absoluteUrl("/case-studies"),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: caseStudies.map((caseStudy, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: caseStudy.title,
              url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
            })),
          },
        }}
      />
      <main className="case-index page-shell" id="main-content">
        <nav className="simple-nav" aria-label="Nawigacja główna">
          <Link href="/">ZOBO</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <header className="case-index__header">
          <p className="eyebrow">Selected work / 2024—2026</p>
          <h1>Case studies</h1>
          <p>
            {keepPolishWordsTogether(
              "Cztery systemy identyfikacji — od jubilerskiego detalu po cyfrową " +
              "markę AI i dynamiczny świat motorsportu.",
            )}
          </p>
        </header>
        <div className="project-grid">
          {caseStudies.map((caseStudy) => (
            <ProjectCard headingLevel="h2" key={caseStudy.slug} project={caseStudy} />
          ))}
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
