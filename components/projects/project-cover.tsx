import Image from "next/image";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  project: Project;
  /** Position affichée (« 01 », « 02 »…). */
  index: string;
  /** Tailles de rendu pour `next/image`, lorsqu'une capture est fournie. */
  sizes: string;
  /** À activer pour une couverture visible dès le chargement de la page. */
  eager?: boolean;
  className?: string;
};

/**
 * Aperçu d'un projet. Affiche la capture d'écran réelle si elle est renseignée
 * dans les données ; sinon, une couverture typographique construite à partir
 * de la pile technique — jamais une fausse capture.
 *
 * L'animation au survol se déclenche depuis le parent portant la classe `group`.
 */
export function ProjectCover({ project, index, sizes, eager = false, className }: ProjectCoverProps) {
  const frame = cn("overflow-hidden rounded-2xl border border-night-line bg-ink", className);

  if (project.screenshot) {
    const { src, alt, width, height } = project.screenshot;
    return (
      <div className={frame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      data-surface="dark"
      className={cn(frame, "@container relative isolate aspect-4/3 text-paper sm:aspect-16/10")}
    >
      <div className="absolute inset-0 -z-10 bg-grid [--grid-color:var(--color-night-line)] [--grid-size:40px] mask-[linear-gradient(to_bottom_left,black,transparent_75%)] transition-transform duration-700 ease-out-expo group-hover:scale-105" />

      <div className="flex h-full flex-col justify-between p-[6cqw]">
        <div className="flex items-start justify-between gap-6">
          <p className="font-mono text-[clamp(10px,1.7cqw,13px)] uppercase tracking-[0.18em] text-night-muted">
            <span className="text-accent-bright">{index}</span>
            <span className="mx-2">/</span>
            {project.category}
          </p>

          <div className="relative">
            <span className="absolute inset-y-2 left-0.75 w-px bg-night-line">
              <span className="absolute -left-0.5 size-1.25 -translate-y-1/2 rounded-full bg-accent-bright opacity-0 motion-safe:group-hover:animate-travel" />
            </span>
            <ol className="relative flex flex-col gap-[2.6cqw] font-mono text-[clamp(10px,1.7cqw,13px)] uppercase tracking-[0.14em] text-night-muted">
              {project.stack.map((technology) => (
                <li key={technology.name} className="flex items-center gap-3">
                  <span className="size-1.75 rounded-full border border-night-muted bg-ink" />
                  {technology.name}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="text-[clamp(2.5rem,17cqw,10rem)] font-semibold leading-[0.85] tracking-tighter transition-transform duration-700 ease-out-expo group-hover:-translate-y-1">
          {project.wordmark}
        </p>
      </div>
    </div>
  );
}
