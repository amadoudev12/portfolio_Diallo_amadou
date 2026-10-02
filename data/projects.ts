export type Technology = {
  name: string;
  /** Rôle de la technologie dans l'application. */
  role: string;
};

export type ProjectScreenshot = {
  /** Chemin depuis /public, par exemple "/projects/noteflow.png". */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  /** Nom court affiché en grand sur la couverture illustrée. */
  wordmark: string;
  category: string;
  /** Mention facultative mise en avant à côté de la catégorie. */
  highlight: string | null;
  audience: string;
  summary: string;
  description: string;
  problem: string;
  features: readonly string[];
  stack: readonly Technology[];
  links: {
    /** URL de l'application en ligne, si elle est déployée. */
    live: string | null;
    /** URL du dépôt GitHub, s'il est public. */
    repository: string | null;
  };
  /** Capture d'écran réelle ; `null` affiche la couverture illustrée. */
  screenshot: ProjectScreenshot | null;
};

export const projects: readonly Project[] = [
  {
    slug: "noteflow",
    name: "NoteFlow",
    wordmark: "NoteFlow",
    category: "Plateforme web",
    highlight: "Projet majeur",
    audience: "Établissements scolaires",
    summary:
      "Plateforme web de gestion des notes scolaires et de suivi académique destinée aux établissements scolaires.",
    description:
      "NoteFlow est une plateforme web de gestion des notes scolaires et de suivi académique destinée aux établissements scolaires. C'est une réalisation importante de mon parcours informatique.",
    problem:
      "Dans un établissement scolaire, le suivi des notes repose sur des tâches répétitives : saisie, calcul des moyennes, préparation des bulletins. NoteFlow réunit ces opérations dans une seule plateforme pour simplifier le suivi académique.",
    features: [
      "Gestion des élèves et des enseignants",
      "Gestion des classes et des matières",
      "Saisie et consultation des notes",
      "Calcul des moyennes",
      "Suivi des résultats scolaires",
      "Consultation et génération des bulletins scolaires",
      "Tableaux de bord et statistiques",
    ],
    stack: [
      { name: "React", role: "Interface utilisateur" },
      { name: "Node.js", role: "Environnement d'exécution côté serveur" },
      { name: "Express", role: "Serveur et routage de l'API" },
      { name: "Prisma", role: "ORM et accès aux données" },
      { name: "MySQL", role: "Base de données relationnelle" },
    ],
    links: { live: "https://frontend-gestion-notes.vercel.app/", repository: "https://github.com/amadoudev12/NoteFlow_FrontEnd" },
    screenshot: {
        src: "/projects/noteflow.png",
        alt: "Tableau de bord de NoteFlow",
        width: 1440,
        height: 900,
    },
  },
  {
    slug: "gestion-de-boutique",
    name: "Gestion de boutique",
    wordmark: "Boutique",
    category: "Application SaaS",
    highlight: null,
    audience: "Petits commerçants",
    summary:
      "Application web SaaS destinée aux petits commerçants, conçue pour simplifier la gestion quotidienne de leur activité.",
    description:
      "Une application web SaaS destinée aux petits commerçants, conçue pour simplifier la gestion quotidienne de leur activité.",
    problem:
      "Suivre ses produits, ses ventes et son chiffre d'affaires au quotidien demande du temps à un petit commerçant. Cette application regroupe ces informations au même endroit pour offrir une vision claire de l'activité.",
    features: [
      "Gestion des produits",
      "Enregistrement et suivi des ventes",
      "Consultation de l'historique des ventes",
      "Tableau de bord",
      "Statistiques sur les ventes et le chiffre d'affaires",
    ],
    stack: [
      { name: "Next.js", role: "Framework de l'application" },
      { name: "TypeScript", role: "Typage statique du code" },
      { name: "Prisma", role: "ORM et accès aux données" },
      { name: "NextAuth", role: "Authentification" },
    ],
    links: { live: "https://rayon-two.vercel.app/login", repository: "https://github.com/amadoudev12/rayon" },
    screenshot:{
        src: "/projects/rayon.png",
        alt: "Tableau de bord de Rayon",
        width: 1440,
        height: 900,
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Position affichée du projet (« 01 », « 02 »…). */
export function getProjectIndex(slug: string): string {
  const position = projects.findIndex((project) => project.slug === slug) + 1;
  return String(position).padStart(2, "0");
}
