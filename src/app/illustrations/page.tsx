import type { Metadata } from "next";
import Link from "next/link";

import { ContactFooter } from "@/components/contact-footer";
import { IllustrationCard } from "@/components/illustration-card";
import { JsonLd } from "@/components/json-ld";
import { illustrations } from "@/data/illustrations";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ilustracje",
  description:
    "Autorskie ilustracje, spersonalizowane projekty okolicznościowe oraz etykiety zaprojektowane przez Agnieszkę Zobel.",
  alternates: { canonical: "/illustrations" },
  openGraph: {
    type: "website",
    title: "Ilustracje — Agnieszka Zobel",
    description:
      "Autorskie ilustracje, projekty okolicznościowe i etykiety w portfolio ZOBO.",
    url: "/illustrations",
    locale: siteConfig.locale,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Ilustracje — portfolio Agnieszki Zobel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilustracje — Agnieszka Zobel",
    description: "Autorskie ilustracje, projekty okolicznościowe i etykiety w portfolio ZOBO.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function IllustrationsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Ilustracje — Agnieszka Zobel",
          description: "Autorskie ilustracje, projekty okolicznościowe i etykiety.",
          url: absoluteUrl("/illustrations"),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: illustrations.map((illustration, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: illustration.title,
              url: absoluteUrl(`/illustrations/${illustration.slug}`),
            })),
          },
        }}
      />
      <main className="illustration-index page-shell" id="main-content">
        <nav className="simple-nav" aria-label="Nawigacja główna">
          <Link href="/">ZOBO</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <header className="case-index__header">
          <p className="eyebrow">Ilustracja / Character design / Packaging</p>
          <h1>Ilustracje<br />i inne</h1>
          <p>
            Autorskie światy, spersonalizowane historie i ilustracja, która
            staje się integralną częścią produktu.
          </p>
        </header>
        <div className="illustration-grid">
          {illustrations.map((illustration) => (
            <IllustrationCard
              headingLevel="h2"
              illustration={illustration}
              key={illustration.slug}
            />
          ))}
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
