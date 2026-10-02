import Link from "next/link";

import { Navigation } from "@/components/layout/navigation";
import { Container } from "@/components/ui/container";
import { sectionHref, site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={sectionHref("accueil")}
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-md bg-ink font-mono text-[11px] font-medium text-paper"
          >
            {site.initials}
          </span>
          {site.name}
        </Link>
        <Navigation />
      </Container>
    </header>
  );
}
