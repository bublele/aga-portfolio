import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { CaseStudyDetail } from "@/components/responsive-case-study";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { absoluteUrl, siteConfig } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Case study not found" };
  }

  return {
    title: caseStudy.seoTitle,
    description: caseStudy.summary,
    keywords: [...caseStudy.services, caseStudy.category, caseStudy.client],
    alternates: { canonical: `/case-studies/${caseStudy.slug}` },
    openGraph: {
      type: "article",
      title: caseStudy.seoTitle,
      description: caseStudy.summary,
      url: `/case-studies/${caseStudy.slug}`,
      locale: siteConfig.locale,
      siteName: siteConfig.shortName,
      images: [
        {
          url: `/case-studies/${caseStudy.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: caseStudy.hero?.alt ?? caseStudy.cover.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.seoTitle,
      description: caseStudy.summary,
      images: [`/case-studies/${caseStudy.slug}/opengraph-image`],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              name: caseStudy.title,
              description: caseStudy.summary,
              url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
              image: absoluteUrl((caseStudy.hero?.src ?? caseStudy.cover.src).src),
              dateCreated: caseStudy.year,
              about: caseStudy.category,
              keywords: caseStudy.services.join(", "),
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
                { "@type": "ListItem", position: 2, name: "Case studies", item: absoluteUrl("/case-studies") },
                { "@type": "ListItem", position: 3, name: caseStudy.title, item: absoluteUrl(`/case-studies/${caseStudy.slug}`) },
              ],
            },
          ],
        }}
      />
      <main className={`case-page case-page--${caseStudy.theme}`} id="main-content">
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
    </>
  );
}
