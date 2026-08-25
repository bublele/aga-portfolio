const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/agnieszka-zobel-8b448a210/",
    icon: "linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/zobelaga/",
    icon: "facebook",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/zobo_graphic/",
    icon: "instagram",
    label: "Instagram",
  },
] as const;

export const siteConfig = {
  name: "ZOBO — Portfolio Agnieszki Zobel",
  shortName: "ZOBO",
  description:
    "Portfolio Agnieszki Zobel — branding, identyfikacje wizualne, ilustracje, packaging i projektowanie UI.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelProductionUrl ? `https://${vercelProductionUrl}` : "http://localhost:3000"),
  email: "zobo.graphdesign@gmail.com",
  author: "Agnieszka Zobel",
  locale: "pl_PL",
  language: "pl",
  updatedAt: "2026-08-25",
  defaultOgImage: "/opengraph-image",
} as const;

export const isPublicSite = siteConfig.url.startsWith("https://");

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
