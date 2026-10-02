import type { ComponentType, SVGProps } from "react";

import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import type { SocialLink } from "@/data/site";

export const socialIcons: Record<SocialLink["id"], ComponentType<SVGProps<SVGSVGElement>>> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

type SocialLinksProps = {
  links: readonly SocialLink[];
};

/** Liens compacts vers les réseaux professionnels (pied de page). */
export function SocialLinks({ links }: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul aria-label="Réseaux professionnels" className="flex items-center gap-5">
      {links.map((link) => {
        const Icon = socialIcons[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-2 flex items-center gap-2 py-2 text-sm text-night-muted transition-colors duration-300 hover:text-paper"
            >
              <Icon className="size-4" />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
