import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import type { ReactNode } from "react";

import { isPublicSite, siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.shortName,
  title: {
    default: "Agnieszka Zobel — Graphic designer / UI | ZOBO",
    template: "%s | ZOBO",
  },
  description: siteConfig.description,
  keywords: [
    "Agnieszka Zobel",
    "ZOBO",
    "graphic designer",
    "branding",
    "identyfikacja wizualna",
    "projektowanie logo",
    "ilustracja",
    "packaging",
    "UI design",
    "Figma",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "design",
  alternates: {
    canonical: "/",
    languages: { "pl-PL": "/" },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.shortName,
    title: "Agnieszka Zobel — Graphic designer / UI",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Agnieszka Zobel — Graphic designer / UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agnieszka Zobel — Graphic designer / UI",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: isPublicSite,
    follow: isPublicSite,
    googleBot: {
      index: isPublicSite,
      follow: isPublicSite,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${bricolage.variable}`}>
        <a className="skip-link" href="#main-content">
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
