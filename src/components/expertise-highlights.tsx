import {
  IconBrandFigma,
  IconBriefcase2,
  IconColorSwatch,
  IconMessageCircle,
  IconPalette,
  IconRoute,
} from "@tabler/icons-react";

import { keepPolishWordsTogether } from "@/lib/typography";

const expertiseHighlights = [
  { Icon: IconBriefcase2, label: "10+ lat doświadczenia" },
  { Icon: IconMessageCircle, label: "Bezpośrednia komunikacja" },
  { Icon: IconRoute, label: "Od briefu do realizacji" },
  { Icon: IconColorSwatch, label: "Branding i DTP" },
  { Icon: IconPalette, label: "Ilustracje i social media" },
  { Icon: IconBrandFigma, label: "UI design w Figma" },
] as const;

export function ExpertiseHighlights() {
  return (
    <ul aria-label="Zakres doświadczenia" className="expertise-highlights">
      {expertiseHighlights.map(({ Icon, label }) => (
        <li className="expertise-highlight" key={label}>
          <span aria-hidden="true" className="expertise-highlight__icon">
            <Icon focusable="false" size={30} stroke={1.65} />
          </span>
          <span className="expertise-highlight__label">{keepPolishWordsTogether(label)}</span>
        </li>
      ))}
    </ul>
  );
}
