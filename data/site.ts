/**
 * URL publique du site, utilisée pour les métadonnées, le sitemap et robots.txt.
 * À définir via la variable d'environnement SITE_URL lors du déploiement.
 */
export const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Diallo Amadou",
  fullName: "Diallo El Hadj Amadou",
  initials: "DA",
  role: "Développeur web",
  education: "Licence en Informatique",
  school: "HETEC",
  intro:
    "Je conçois et développe des applications web modernes, intuitives et adaptées aux besoins réels. Passionné par la technologie, je transforme les idées en solutions numériques.",
  description:
    "Portfolio de Diallo Amadou, développeur web titulaire d'une Licence en Informatique (HETEC). Découvrez NoteFlow et une application SaaS de gestion de boutique.",
} as const;

export type NavItem = {
  id: string;
  label: string;
};

/** Sections de la page d'accueil, dans l'ordre d'affichage. */
export const navigation: readonly NavItem[] = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "contact", label: "Contact" },
];

export function sectionHref(id: string): string {
  return `/#${id}`;
}

type ContactDetails = {
  /** Adresse e-mail seule, sans préfixe « mailto: ». */
  email: string | null;
  /** URL complète du profil LinkedIn. */
  linkedin: string | null;
  /** URL complète du profil GitHub. */
  github: string | null;
};

/**
 * Coordonnées affichées dans la section Contact et le pied de page.
 * Une valeur `null` masque simplement l'élément correspondant :
 * aucun lien factice n'est jamais rendu.
 */
export const contact: ContactDetails = {
  email: "delhadjamadou670@gmail.com",
  linkedin: "https://www.linkedin.com/in/amadou-diallo-56297b298",
  github: "https://github.com/amadoudev12",
};

export type SocialLink = {
  id: "linkedin" | "github";
  label: string;
  href: string;
};

function buildSocialLinks({ linkedin, github }: ContactDetails): SocialLink[] {
  const links: SocialLink[] = [];
  if (linkedin) links.push({ id: "linkedin", label: "LinkedIn", href: linkedin });
  if (github) links.push({ id: "github", label: "GitHub", href: github });
  return links;
}

export const socialLinks: readonly SocialLink[] = buildSocialLinks(contact);
