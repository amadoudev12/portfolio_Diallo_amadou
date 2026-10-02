# Portfolio — Diallo Amadou

Portfolio personnel de Diallo Amadou, développeur web. Il présente son profil, ses compétences et deux projets : NoteFlow et une application SaaS de gestion de boutique.

Construit avec Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion et Lucide React.

## Démarrer

```bash
npm install
npm run dev
```

Le site est alors disponible sur [http://localhost:3000](http://localhost:3000).

| Commande            | Rôle                                  |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Serveur de développement              |
| `npm run build`     | Build de production                   |
| `npm run start`     | Sert le build de production           |
| `npm run lint`      | Analyse ESLint                        |
| `npx tsc --noEmit`  | Vérification des types                |

## Modifier le contenu

Tout le contenu vit dans le dossier `data/`, séparé des composants.

| Fichier            | Contenu                                                      |
| ------------------ | ------------------------------------------------------------ |
| `data/site.ts`     | Identité, navigation, e-mail, liens LinkedIn et GitHub       |
| `data/projects.ts` | Les projets : textes, fonctionnalités, technologies, liens   |
| `data/skills.ts`   | Les compétences, par catégorie                               |

Une valeur laissée à `null` masque l'élément correspondant. Aucun lien vide n'est affiché.

### Coordonnées

Dans `data/site.ts`, renseigner l'objet `contact` :

```ts
export const contact: ContactDetails = {
  email: "prenom.nom@exemple.com",
  linkedin: "https://www.linkedin.com/in/identifiant/",
  github: "https://github.com/identifiant",
};
```

### Liens et captures d'écran des projets

Dans `data/projects.ts`, chaque projet accepte :

- `links.live` : l'adresse de l'application en ligne ;
- `links.repository` : l'adresse du dépôt GitHub ;
- `screenshot` : une capture d'écran réelle, placée dans `public/projects/`.

```ts
links: { live: "https://…", repository: "https://github.com/…" },
screenshot: {
  src: "/projects/noteflow.png",
  alt: "Tableau de bord de NoteFlow",
  width: 1440,
  height: 900,
},
```

Sans capture, le projet affiche une couverture typographique.

## Déploiement

Définir la variable d'environnement `SITE_URL` avec l'adresse publique du site (par exemple `https://mon-domaine.com`). Elle sert aux métadonnées, au `sitemap.xml` et au `robots.txt`. Sur Vercel, l'adresse de production est détectée automatiquement si la variable est absente.

## Structure

```
app/                   Pages, mise en page, métadonnées, sitemap, robots
  projets/[slug]/      Page de détail d'un projet
components/
  layout/              Barre de navigation, pied de page
  sections/            Sections de la page d'accueil
  projects/            Carte et couverture de projet
  motion/              Animations (Framer Motion)
  ui/                  Éléments réutilisables
data/                  Contenu du site
hooks/                 Hooks React
lib/                   Fonctions utilitaires
```
