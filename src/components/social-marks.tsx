import { socialLinks } from "@/lib/site";

type SocialMarksProps = {
  inverse?: boolean;
};

export function SocialMarks({ inverse = false }: SocialMarksProps) {
  return (
    <nav
      aria-label="Media społecznościowe"
      className={inverse ? "social-marks social-marks--inverse" : "social-marks"}
    >
      {socialLinks.map(({ href, icon, label }) => (
        <a
          aria-label={label}
          className={`social-mark social-mark--${icon}`}
          data-analytics-event="social_profile_open"
          data-analytics-placement={inverse ? "footer" : "hero"}
          data-analytics-network={icon}
          href={href}
          key={label}
          rel="noreferrer"
          target="_blank"
        >
          <span aria-hidden="true" className="social-mark__icon" />
        </a>
      ))}
    </nav>
  );
}
