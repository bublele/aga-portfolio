import Image from "next/image";

import { ContactFooter } from "@/components/contact-footer";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { SocialMarks } from "@/components/social-marks";
import { caseStudies } from "@/data/case-studies";
import { media } from "@/data/media";
import { absoluteUrl, siteConfig, socialLinks } from "@/lib/site";
import { keepPolishWordsTogether } from "@/lib/typography";

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
            <p className="home-hero__role">Brand / UI / AI designer</p>
            <p className="home-hero__bio">
              {keepPolishWordsTogether(
                "10 lat doświadczenia w branży, wszechstronność i konkretne podejście " +
                "do celów. Zarządzam projektami od początku do końca na każdym ich " +
                "etapie: od bezpośredniej komunikacji z klientem, przez pełny branding " +
                "(brandbooki, księgi znaku), autorskie ilustracje, DTP, kompleksowe " +
                "grafiki i posty do mediów społecznościowych, aż po zaawansowane " +
                "projektowanie stron internetowych w Figmie.",
              )}
            </p>
            <p className="home-hero__lead">
              {keepPolishWordsTogether(
                "Mój szeroki wachlarz umiejętności pozwala mi na elastyczne " +
                "dostarczanie spójnych rozwiązań zarówno dla nośników cyfrowych, " +
                "jak i fizycznych.",
              )}
            </p>
            <SocialMarks />
            <div className="home-hero__actions">
              <a className="primary-button" href="#case-studies">
                My work
                <svg aria-hidden="true" fill="none" focusable="false" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m9 4 8 8-8 8" />
                </svg>
              </a>
              <a
                className="primary-button primary-button--outline"
                data-analytics-event="cv_download"
                data-analytics-placement="hero"
                download="Agnieszka-Zobel-CV.pdf"
                href="/agnieszka-zobel-cv.pdf"
              >
                Pobierz CV
                <svg aria-hidden="true" fill="none" focusable="false" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 3v12m-5-5 5 5 5-5M3 15v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5" />
                </svg>
                <span className="visually-hidden">(PDF)</span>
              </a>
            </div>
          </div>
          <div className="home-hero__portrait">
            <Image
              alt="Agnieszka Zobel — graphic designer i projektantka UI"
              fill
              placeholder="blur"
              fetchPriority="high"
              loading="eager"
              quality={82}
              sizes="(max-width: 720px) calc(100vw - 48px), 620px"
              src={media.portrait}
            />
          </div>
        </section>

        <section aria-label="Projekty" className="work-index page-shell" id="projekty">
          <div className="project-grid" id="case-studies">
            {caseStudies.map((project) => (
              <ProjectCard headingLevel="h2" key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
