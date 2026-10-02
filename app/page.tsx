import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { contact, site, siteUrl, socialLinks } from "@/data/site";
import { skillCategories } from "@/data/skills";

// Données structurées : seules les informations réellement renseignées sont émises.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  url: siteUrl,
  knowsAbout: skillCategories.flatMap((category) => category.skills),
  ...(contact.email && { email: `mailto:${contact.email}` }),
  ...(socialLinks.length > 0 && { sameAs: socialLinks.map((link) => link.href) }),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
