import { AnalyticsPreferencesButton } from "@/components/analytics-consent";
import { SocialMarks } from "@/components/social-marks";
import { analyticsConfig } from "@/lib/analytics";

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="kontakt">
      <div className="contact-footer__inner">
        <h2>Zróbmy coś razem</h2>
        <p>
          Napisz do mnie! Chętnie omówię wspólne projekty,
          <br /> odpowiem na pytania albo po prostu pogadam.
        </p>
        <div className="contact-footer__actions">
          <SocialMarks inverse />
          <a className="email-chip" href="mailto:zobo.graphdesign@gmail.com">
            zobo.graphdesign@gmail.com
          </a>
        </div>
        {analyticsConfig && <AnalyticsPreferencesButton />}
      </div>
    </footer>
  );
}
