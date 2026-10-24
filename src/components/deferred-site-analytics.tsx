"use client";

import dynamic from "next/dynamic";

const SiteAnalytics = dynamic(
  () => import("@/components/site-analytics").then((module) => module.SiteAnalytics),
  { ssr: false },
);

export function DeferredSiteAnalytics() {
  return <SiteAnalytics />;
}
