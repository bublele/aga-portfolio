import type { MetadataRoute } from "next";

import { caseStudies } from "@/data/case-studies";
import { illustrations } from "@/data/illustrations";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/case-studies"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseStudies.map((caseStudy) => ({
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: [absoluteUrl((caseStudy.hero?.src ?? caseStudy.cover.src).src)],
    })),
    {
      url: absoluteUrl("/illustrations"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...illustrations.map((illustration) => ({
      url: absoluteUrl(`/illustrations/${illustration.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [absoluteUrl(illustration.image.src.src)],
    })),
  ];
}
