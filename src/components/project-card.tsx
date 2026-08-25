import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/types/case-study";

type ProjectCardProps = {
  headingLevel?: "h2" | "h3";
  project: CaseStudy;
};

export function ProjectCard({
  headingLevel = "h3",
  project,
}: ProjectCardProps) {
  const Heading = headingLevel;

  return (
    <Link
      aria-label={`Zobacz case study: ${project.title}`}
      className="project-card"
      href={`/case-studies/${project.slug}`}
    >
      <Image
        alt={project.cover.alt}
        className="project-card__image"
        fill
        placeholder="blur"
        sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1512px) 43vw, 648px"
        src={project.cover.src}
      />
      <span className="project-card__label">
        <Heading>{project.title}</Heading>
        <span aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
