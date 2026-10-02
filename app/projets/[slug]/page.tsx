import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { GithubIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCover } from "@/components/projects/project-cover";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getProjectBySlug, getProjectIndex, projects } from "@/data/projects";
import { sectionHref } from "@/data/site";

// Seuls les projets déclarés dans les données existent : toute autre URL renvoie une 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const path = `/projets/${project.slug}`;
  return {
    title: `${project.name} — ${project.category}`,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: path,
      title: project.name,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = getProjectIndex(project.slug);
  const otherProjects = projects.filter((candidate) => candidate.slug !== project.slug);
  const { live, repository } = project.links;

  return (
    <article aria-labelledby="projet-titre">
      <Container className="pt-10 pb-24 lg:pt-14 lg:pb-32">
        <Link
          href={sectionHref("projets")}
          className="group inline-flex items-center gap-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-ink"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-x-0.5"
          />
          Tous les projets
        </Link>

        <header className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-muted motion-safe:animate-rise">
              <span className="text-accent">Projet {index}</span>
              <span>{project.category}</span>
              {project.highlight && (
                <span className="rounded-full border border-accent/40 px-2.5 py-0.5 tracking-[0.12em] text-accent">
                  {project.highlight}
                </span>
              )}
            </p>
            <h1
              id="projet-titre"
              className="mt-6 text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-balance motion-safe:animate-rise motion-safe:[animation-delay:80ms]"
            >
              {project.name}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted text-pretty motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
              {project.description}
            </p>
          </div>

          {(live || repository) && (
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              {live && (
                <ButtonLink href={live}>
                  Voir l&apos;application
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </ButtonLink>
              )}
              {repository && (
                <ButtonLink href={repository} variant="secondary">
                  <GithubIcon className="size-4" />
                  Code source
                </ButtonLink>
              )}
            </div>
          )}
        </header>

        <div className="group mt-14 motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
          <ProjectCover
            project={project}
            index={index}
            sizes="(min-width: 1152px) 1056px, 100vw"
            eager
            className="lg:aspect-21/9"
          />
        </div>

        <dl className="mt-10 grid gap-8 border-b border-line pb-10 sm:grid-cols-3">
          <ProjectFact term="Type" detail={project.category} />
          <ProjectFact term="Public visé" detail={project.audience} />
          <ProjectFact
            term="Technologies"
            detail={project.stack.map((technology) => technology.name).join(", ")}
          />
        </dl>

        <div className="mt-20 flex flex-col gap-20 lg:mt-28 lg:gap-28">
          <ProjectSection title="Le problème">
            <p className="max-w-2xl text-xl leading-relaxed tracking-tight text-pretty sm:text-2xl sm:leading-relaxed">
              {project.problem}
            </p>
          </ProjectSection>

          <ProjectSection title="Fonctionnalités">
            <ol className="grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {project.features.map((feature, position) => (
                <li key={feature} className="flex gap-5 border-b border-line py-5">
                  <span aria-hidden="true" className="font-mono text-xs leading-6 text-accent">
                    {String(position + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium">{feature}</span>
                </li>
              ))}
            </ol>
          </ProjectSection>

          <ProjectSection title="Technologies">
            <dl className="border-t border-line">
              {project.stack.map((technology) => (
                <div
                  key={technology.name}
                  className="grid gap-1 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <dt className="text-xl font-semibold tracking-tight">{technology.name}</dt>
                  <dd className="text-base text-muted">{technology.role}</dd>
                </div>
              ))}
            </dl>
          </ProjectSection>
        </div>
      </Container>

      {otherProjects.length > 0 && (
        <nav aria-label="Autres projets" className="border-t border-line">
          {otherProjects.map((other) => (
            <Link key={other.slug} href={`/projets/${other.slug}`} className="group block">
              <Container className="flex items-center justify-between gap-6 py-14 lg:py-20">
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Projet suivant
                  </span>
                  <span className="mt-3 block text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                    {other.name}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-8 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-2 sm:size-10"
                />
              </Container>
            </Link>
          ))}
        </nav>
      )}
    </article>
  );
}

function ProjectFact({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{term}</dt>
      <dd className="mt-2 text-base font-medium">{detail}</dd>
    </div>
  );
}

function ProjectSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section className="grid gap-8 lg:grid-cols-12 lg:gap-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted lg:col-span-4 lg:pt-2">
          {title}
        </h2>
        <div className="lg:col-span-8">{children}</div>
      </section>
    </Reveal>
  );
}
