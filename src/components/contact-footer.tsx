import { SocialMarks } from "@/components/social-marks";

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="kontakt">
      <div className="contact-footer__inner">
        <h2>Zróbmy coś razem</h2>
        <p>
          I&apos;d love to hear from you and explore collaboration,
          <br /> answer your questions, or simply chat.
        </p>
        <div className="contact-footer__actions">
          <SocialMarks inverse />
          <a className="email-chip" href="mailto:zobo.graphdesign@gmail.com">
            zobo.graphdesign@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
