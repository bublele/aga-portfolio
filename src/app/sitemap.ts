import type { MetadataRoute } from "next";

import { caseStudies } from "@/data/case-studies";
import { illustrations } from "@/data/illustrations";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.updatedAt);

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/case-studies"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseStudies.map((caseStudy) => ({
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: [absoluteUrl((caseStudy.hero?.src ?? caseStudy.cover.src).src)],
    })),
    {
      url: absoluteUrl("/illustrations"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...illustrations.map((illustration) => ({
      url: absoluteUrl(`/illustrations/${illustration.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [absoluteUrl(illustration.image.src.src)],
    })),
  ];
}
