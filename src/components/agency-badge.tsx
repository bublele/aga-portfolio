import Image from "next/image";

import badge from "@/assets/v4/idgroup-badge.svg";

export function AgencyBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`agency-badge ${className}`}>
      <Image alt="IDgroup Team" src={badge} unoptimized />
    </span>
  );
}
