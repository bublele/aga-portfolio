"use client";

import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect } from "react";

const customEventsEnabled = process.env.NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS_ENABLED === "true";
const eventNames = new Set(["contact_intent", "cv_download", "social_profile_open"]);

function withoutQuery<T extends { url: string }>(event: T): T {
  const url = new URL(event.url);
  url.search = "";
  url.hash = "";
  return { ...event, url: url.toString() };
}

export function SiteAnalytics() {
  useEffect(() => {
    if (!customEventsEnabled) return;

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[data-analytics-event]");
      const name = link?.dataset.analyticsEvent;
      if (!link || !name || !eventNames.has(name)) return;

      track(name, {
        placement: link.dataset.analyticsPlacement ?? "unknown",
        ...(link.dataset.analyticsNetwork ? { network: link.dataset.analyticsNetwork } : {}),
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Analytics beforeSend={withoutQuery} debug={false} />
      <SpeedInsights beforeSend={withoutQuery} debug={false} />
    </>
  );
}
