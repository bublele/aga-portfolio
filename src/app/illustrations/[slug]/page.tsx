import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IllustrationDetail } from "@/components/responsive-illustration-detail";
import { JsonLd } from "@/components/json-ld";
import { getIllustration, illustrations } from "@/data/illustrations";
import { absoluteUrl, siteConfig } from "@/lib/site";

type IllustrationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return illustrations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IllustrationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const illustration = getIllustration(slug);

  if (!illustration) {
    return { title: "Projekt ilustracyjny nie istnieje" };
  }

  return {
    title: illustration.title,
    description: illustration.summary,
    keywords: [...illustration.services, illustration.eyebrow],
    alternates: { canonical: `/illustrations/${illustration.slug}` },
    openGraph: {
      type: "article",
      title: illustration.title,
      description: illustration.summary,
      url: `/illustrations/${illustration.slug}`,
      locale: siteConfig.locale,
      siteName: siteConfig.shortName,
      images: [
        {
          url: `/illustrations/${illustration.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: illustration.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: illustration.title,
      description: illustration.summary,
      images: [`/illustrations/${illustration.slug}/opengraph-image`],
    },
  };
}

export default async function IllustrationPage({ params }: IllustrationPageProps) {
  const { slug } = await params;
  const illustration = getIllustration(slug);

  if (!illustration) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: illustration.title,
              description: illustration.summary,
              url: absoluteUrl(`/illustrations/${illustration.slug}`),
              image: absoluteUrl(illustration.image.src.src),
              temporalCoverage: illustration.year.replace("—", "/"),
              mainEntity: {
                "@type": "ItemList",
                itemListElement: (illustration.collections ?? [{ images: illustration.gallery }]).map((collection, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "VisualArtwork",
                    name: collection.title ?? illustration.title,
                    url: absoluteUrl(`/illustrations/${illustration.slug}#kolekcja-${index + 1}`),
                    image: collection.images.map(({ src }) => absoluteUrl(src.src)),
                    creator: {
                      "@type": "Person",
                      name: siteConfig.author,
                      url: siteConfig.url,
                    },
                  },
                })),
              },
              creator: {
                "@type": "Person",
                name: siteConfig.author,
                url: siteConfig.url,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Portfolio", item: siteConfig.url },
                { "@type": "ListItem", position: 2, name: "Ilustracje", item: absoluteUrl("/illustrations") },
                { "@type": "ListItem", position: 3, name: illustration.title, item: absoluteUrl(`/illustrations/${illustration.slug}`) },
              ],
            },
          ],
        }}
      />
      <main className="illustration-page" id="main-content">
        <IllustrationDetail illustration={illustration} />
      </main>
    </>
  );
}
