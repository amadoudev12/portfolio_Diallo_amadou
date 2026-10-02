import { ArrowDown } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { sectionHref, site } from "@/data/site";

const highlights = [
  { term: "Formation", detail: `${site.education} — ${site.school}` },
  { term: "Domaine", detail: "Applications web et solutions SaaS" },
  { term: "Réalisations", detail: `${projects.length} projets présentés` },
];

export function Hero() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid [--grid-color:var(--color-line)] mask-[radial-gradient(ellipse_at_top_right,black,transparent_62%)]"
      />

      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-between gap-16 pt-16 pb-10 sm:pt-24 lg:pt-28">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted motion-safe:animate-rise">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Diplômé en informatique
          </p>

          <h1
            id="hero-title"
            className="mt-8 text-[clamp(3.25rem,11.5vw,8.75rem)] font-semibold leading-[0.9] tracking-tighter motion-safe:animate-rise motion-safe:[animation-delay:80ms]"
          >
            {site.name}
            <span aria-hidden="true" className="text-accent">
              .
            </span>
          </h1>

          <p className="mt-8 text-2xl font-medium tracking-tight sm:text-3xl motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
            {site.role}
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row motion-safe:animate-rise motion-safe:[animation-delay:320ms]">
            <ButtonLink href={sectionHref("projets")}>
              Découvrir mes projets
              <ArrowDown
                aria-hidden="true"
                className="size-4 transition-transform duration-300 ease-out-expo group-hover/button:translate-y-0.5"
              />
            </ButtonLink>
            <ButtonLink href={sectionHref("contact")} variant="secondary">
              Me contacter
            </ButtonLink>
          </div>
        </div>

        <dl className="grid gap-6 border-t border-line pt-6 sm:grid-cols-3 motion-safe:animate-rise motion-safe:[animation-delay:420ms]">
          {highlights.map((item) => (
            <div key={item.term}>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {item.term}
              </dt>
              <dd className="mt-2 text-sm font-medium">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
