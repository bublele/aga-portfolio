import Image from "next/image";
import Link from "next/link";

import { ContactFooter } from "@/components/contact-footer";
import { ExpertiseHighlights } from "@/components/expertise-highlights";
import { IllustrationCard } from "@/components/illustration-card";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { SocialMarks } from "@/components/social-marks";
import { caseStudies } from "@/data/case-studies";
import { illustrations } from "@/data/illustrations";
import { media } from "@/data/media";
import { absoluteUrl, siteConfig, socialLinks } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: siteConfig.name,
          url: siteConfig.url,
          mainEntity: {
            "@type": "Person",
            name: siteConfig.author,
            alternateName: "ZOBO",
            url: siteConfig.url,
            image: absoluteUrl(media.portrait.src),
            email: `mailto:${siteConfig.email}`,
            sameAs: socialLinks.map(({ href }) => href),
            jobTitle: "Graphic designer / UI designer",
            knowsAbout: [
              "Brand identity",
              "Graphic design",
              "Illustration",
              "Packaging design",
              "UI design",
              "Figma",
            ],
          },
        }}
      />
      <main className="home-main" id="main-content">
        <div aria-hidden="true" className="home-main__gradient">
          <span className="home-main__gradient-ellipse home-main__gradient-ellipse--10" />
          <span className="home-main__gradient-ellipse home-main__gradient-ellipse--9" />
          <span className="home-main__gradient-ellipse home-main__gradient-ellipse--11" />
        </div>
        <section className="home-hero" id="o-mnie">
          <div className="home-hero__copy">
            <h1>
              Agnieszka{" "}
              <span className="home-hero__name-line">Zobel &lsquo;zobo&rsquo;</span>
            </h1>
            <p className="home-hero__role">Graphic designer / UI</p>
            <p className="home-hero__bio">
              W projektowaniu łączę estetykę z funkcjonalnością i świadomie
              podejmuję każdą decyzję. Tworzę rozwiązania, które mają wyrazisty
              charakter, pozostają spójne i realnie wspierają cele marki -
              niezależnie od skali projektu.
            </p>
            <p className="home-hero__lead">
              Mój szeroki wachlarz umiejętności pozwala mi na elastyczne
              dostarczanie spójnych rozwiązań zarówno dla nośników cyfrowych,
              jak i fizycznych.
            </p>
            <ExpertiseHighlights />
            <SocialMarks />
            <Link className="primary-button" href="#projekty">
              My work <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className="home-hero__portrait">
            <Image
              alt="Agnieszka Zobel — graphic designer i projektantka UI"
              fill
              placeholder="blur"
              preload
              quality={82}
              sizes="(max-width: 720px) calc(100vw - 48px), 620px"
              src={media.portrait}
            />
          </div>
        </section>

        <section className="work-index page-shell" id="projekty">
          <div className="work-index__headings">
            <h2>1. Logo design, branding</h2>
            <h2>2. Ilustracje i inne</h2>
          </div>

          <div className="work-block">
            <Link className="work-block__label work-block__link" href="/case-studies">
              <span>1. Logo design, branding - case study - wybrane</span>
            </Link>
            <div className="project-grid">
              {caseStudies.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div className="work-block work-block--illustrations">
            <Link className="work-block__label work-block__link" href="/illustrations">
              <span>2. Ilustracje i inne</span>
            </Link>
            <div className="illustration-grid">
              {illustrations.map((item) => (
                <IllustrationCard illustration={item} key={item.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
