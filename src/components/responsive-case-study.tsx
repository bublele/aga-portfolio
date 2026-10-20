import Image from "next/image";
import Link from "next/link";

import { AgencyBadge } from "@/components/agency-badge";
import { BelloroLogoConstruction } from "@/components/belloro-logo-construction";
import { Cloud9LogoConstruction } from "@/components/cloud9-logo-construction";
import { ContactFooter } from "@/components/contact-footer";
import { Formel7LogoConstruction } from "@/components/formel7-logo-construction";
import { ObstruoLogoConstruction } from "@/components/obstruo-logo-construction";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import styles from "@/components/portfolio-detail.module.css";
import type { CaseStudy } from "@/types/case-study";

const identity = {
  belloro: {
    Construction: BelloroLogoConstruction,
    symbol: "/belloro/symbol.svg",
    colors: ["#72645d", "#ffffff", "#bbb2a8"],
  },
  cloud9: {
    Construction: Cloud9LogoConstruction,
    symbol: "/cloud9/symbol.svg",
    colors: ["#000000", "#ffffff", "#4f4f4f"],
  },
  obstruo: {
    Construction: ObstruoLogoConstruction,
    symbol: "/obstruo/symbol.svg",
    colors: ["#c6b3ff", "#000000", "#ffffff"],
  },
  formel: {
    Construction: Formel7LogoConstruction,
    symbol: "/formel7/symbol.svg",
    colors: ["#151a1d", "#ffffff", "#00a6e8"],
  },
} as const;

export function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const hero = caseStudy.hero ?? caseStudy.cover;
  const { Construction, symbol, colors } = identity[caseStudy.theme];

  return (
    <article className={styles.project}>
      <div className={styles.surface}>
        {caseStudy.slug === "obstruo" && <AgencyBadge className={styles.projectAgencyBadge} />}
        <Link className={styles.back} href="/#projekty">← Portfolio</Link>
        <div className="page-shell">
          <header className={styles.intro}>
            <p className={styles.year}>Rok: {caseStudy.year}</p>
            <h1>{caseStudy.displayTitle}</h1>
            <p className={styles.subtitle}>{caseStudy.client}</p>
            <div className={styles.description}>
              <p>{caseStudy.description[0]}</p>
            </div>
            <div className={styles.scope}>
              <strong>Zakres prac:</strong>
              <ul>{caseStudy.services.map((service) => <li key={service}>{service}</li>)}</ul>
            </div>
          </header>

          <figure className={styles.hero}>
            <Image alt={hero.alt} placeholder="blur" preload sizes="(max-width: 1512px) 86vw, 1296px" src={hero.src} />
          </figure>
          <section className={styles.story}>
            <h2>{caseStudy.storyTitle}</h2>
            <p>{caseStudy.description.slice(1).join(" ")}</p>
          </section>
          <div className={styles.construction}><Construction /></div>
          <div aria-label={`Warianty kolorystyczne znaku ${caseStudy.title}`} className={`${styles.palette} ${styles[caseStudy.theme]}`}>
            {colors.map((color, index) => (
              <div className={styles.paletteItem} key={color} style={{ backgroundColor: color }}>
                <Image
                  alt={`${caseStudy.title} — wariant ${index + 1}`}
                  className={index === 1 ? styles.paletteInk : styles.paletteReverse}
                  height={240}
                  src={caseStudy.theme === "formel" && index === 1
                    ? "/formel7/symbol-dark.svg"
                    : caseStudy.theme === "belloro" && index === 1
                      ? "/belloro/symbol-gradient.svg"
                      : caseStudy.theme === "obstruo" && index > 0
                        ? "/obstruo/symbol-accent.svg"
                        : symbol}
                  unoptimized
                  width={240}
                />
              </div>
            ))}
          </div>
          <section className={`${styles.story} ${styles.applications}`}>
            <h2>{caseStudy.identity.title}</h2>
            <p>{caseStudy.identity.description}</p>
          </section>
          <PortfolioGallery items={caseStudy.gallery} label={`Galeria projektu ${caseStudy.title}`} />
        </div>
      </div>
      <ContactFooter />
    </article>
  );
}
