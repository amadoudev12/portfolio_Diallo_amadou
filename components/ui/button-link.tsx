import Link from "next/link";
import type { ReactNode } from "react";

import { cn, isExternalHref } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Surface sur laquelle le bouton est posé. */
  surface?: "light" | "dark";
  className?: string;
};

const baseStyles =
  "group/button inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-sm font-medium transition-colors duration-300";

const variantStyles = {
  light: {
    primary: "bg-ink text-paper hover:bg-accent",
    secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  },
  dark: {
    primary: "bg-paper text-ink hover:bg-accent-bright",
    secondary:
      "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  },
} as const;

/** Lien stylé en bouton : `next/link` en interne, `<a>` vers l'extérieur. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  surface = "light",
  className,
}: ButtonLinkProps) {
  const styles = cn(baseStyles, variantStyles[surface][variant], className);

  if (isExternalHref(href)) {
    const opensNewTab = !href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={styles}
        {...(opensNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
