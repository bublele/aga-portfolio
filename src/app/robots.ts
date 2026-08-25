import type { MetadataRoute } from "next";

import { absoluteUrl, isPublicSite, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isPublicSite ? { allow: "/" } : { disallow: "/" }),
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
