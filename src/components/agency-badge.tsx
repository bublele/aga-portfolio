import Image from "next/image";

import badge from "@/assets/v4/idgroup-badge.webp";

export function AgencyBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`agency-badge ${className}`}>
      <Image alt="IDgroup Team" sizes="(max-width: 720px) 32px, 57px" src={badge} />
    </span>
  );
}
