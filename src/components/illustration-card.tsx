import Image from "next/image";
import Link from "next/link";

import { keepPolishWordsTogether } from "@/lib/typography";
import type { IllustrationProject } from "@/types/illustration";

type IllustrationCardProps = {
  headingLevel?: "h2" | "h3";
  illustration: IllustrationProject;
};

export function IllustrationCard({
  headingLevel = "h3",
  illustration,
}: IllustrationCardProps) {
  const Heading = headingLevel;

  return (
    <Link
      className="illustration-card"
      href={`/illustrations/${illustration.slug}`}
    >
      <div className="illustration-card__image">
        <Image
          alt={illustration.image.alt}
          fill
          placeholder="blur"
          sizes="(max-width: 720px) calc(100vw - 72px), (max-width: 1512px) 28vw, 410px"
          src={illustration.image.src}
        />
      </div>
      <div className="illustration-card__meta">
        <Heading>{keepPolishWordsTogether(illustration.shortTitle)}</Heading>
        <span>więcej</span>
        <span aria-hidden="true">›</span>
      </div>
    </Link>
  );
}
