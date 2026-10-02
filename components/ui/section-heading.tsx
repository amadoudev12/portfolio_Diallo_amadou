import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Identifiant du titre, référencé par `aria-labelledby` sur la section. */
  id: string;
  index: string;
  label: string;
  title: string;
  surface?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  index,
  label,
  title,
  surface = "light",
  className,
}: SectionHeadingProps) {
  const isDark = surface === "dark";

  return (
    <div className={className}>
      <p
        className={cn(
          "font-mono text-xs uppercase tracking-[0.18em]",
          isDark ? "text-night-muted" : "text-muted",
        )}
      >
        <span className={isDark ? "text-accent-bright" : "text-accent"}>{index}</span>
        <span aria-hidden="true" className="mx-2">
          /
        </span>
        {label}
      </p>
      <h2
        id={id}
        className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
    </div>
  );
}
