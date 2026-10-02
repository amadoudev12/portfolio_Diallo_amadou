import { ArrowUp } from "lucide-react";

import { SocialLinks } from "@/components/layout/social-links";
import { Container } from "@/components/ui/container";
import { site, socialLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-page-content data-surface="dark" className="bg-ink text-paper">
      <Container className="border-t border-night-line py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 text-sm text-night-muted">{site.role}</p>
          </div>

          <SocialLinks links={socialLinks} />

          <a
            href="#top"
            className="group -my-2 flex items-center gap-2 self-start py-2 text-sm text-night-muted transition-colors duration-300 hover:text-paper sm:self-auto"
          >
            Retour en haut
            <ArrowUp
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <p className="mt-10 font-mono text-xs text-night-muted">
          © {year} {site.name}. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
}
