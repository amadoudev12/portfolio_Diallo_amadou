import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectCover } from "@/components/projects/project-cover";
import { ButtonLink } from "@/components/ui/button-link";
import { TechList } from "@/components/ui/tech-list";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: string;
  /** Inverse la disposition image / texte sur grand écran. */
  reversed?: boolean;
};

export function ProjectCard({ project, index, reversed = false }: ProjectCardProps) {
  const href = `/projets/${project.slug}`;
  const titleId = `projet-${project.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      {/* Lien décoratif : le bouton « Consulter le projet » reste le lien accessible. */}
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className={cn("block lg:col-span-7", reversed && "lg:order-last")}
      >
        <ProjectCover project={project} index={index} sizes="(min-width: 1024px) 58vw, 100vw" />
      </Link>

      <div className="lg:col-span-5">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="text-accent">{index}</span>
          <span>{project.category}</span>
          {project.highlight && (
            <span className="rounded-full border border-accent/40 px-2.5 py-0.5 tracking-[0.12em] text-accent">
              {project.highlight}
            </span>
          )}
        </p>

        <h3 id={titleId} className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{project.summary}</p>

        <ul
          aria-label="Principales fonctionnalités"
          className="mt-6 grid gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
        >
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.55em] size-1 shrink-0 bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <TechList
          items={project.stack.map((technology) => technology.name)}
          label="Technologies utilisées"
          className="mt-7"
        />

        <ButtonLink href={href} className="mt-8">
          Consulter le projet
          <span className="sr-only"> {project.name}</span>
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 ease-out-expo group-hover/button:translate-x-0.5"
          />
        </ButtonLink>
      </div>
    </article>
  );
}
