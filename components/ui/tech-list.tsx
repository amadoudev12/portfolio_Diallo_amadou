import { cn } from "@/lib/utils";

type TechListProps = {
  items: readonly string[];
  /** Nom accessible de la liste. */
  label: string;
  className?: string;
};

export function TechList({ items, label, className }: TechListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
