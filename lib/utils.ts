type ClassValue = string | false | null | undefined;

/** Assemble des classes CSS en ignorant les valeurs vides. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Vrai pour les liens qui quittent le site (http, https, mailto). */
export function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:)/.test(href);
}

/** « https://www.github.com/nom/ » → « github.com/nom ». */
export function formatUrlForDisplay(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
