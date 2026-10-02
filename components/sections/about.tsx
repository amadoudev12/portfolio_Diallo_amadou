import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

const facts = [
  { term: "Formation", detail: `${site.education} — ${site.school}` },
  { term: "Passion", detail: "Le développement web" },
  { term: "Centres d'intérêt", detail: "Applications modernes et solutions SaaS" },
  { term: "Objectif", detail: "Progresser en réalisant des projets concrets" },
];

export function About() {
  return (
    <section id="a-propos" aria-labelledby="a-propos-titre" className="border-t border-line">
      <Container className="grid gap-12 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            id="a-propos-titre"
            index="01"
            label="À propos"
            title="Diplômé en informatique, développeur par passion."
          />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.08}>
            <p className="text-xl leading-relaxed tracking-tight text-pretty sm:text-2xl sm:leading-relaxed">
              Titulaire d&apos;une {site.education} obtenue à {site.school}, je suis passionné par le
              développement web et par la conception d&apos;applications modernes.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted text-pretty">
              Je m&apos;intéresse particulièrement aux solutions SaaS. Mon ambition&nbsp;: continuer à
              développer mes compétences en réalisant des projets concrets.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-12 border-t border-line">
              {facts.map((fact) => (
                <div
                  key={fact.term}
                  className="grid gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-xs uppercase leading-6 tracking-[0.18em] text-muted">
                    {fact.term}
                  </dt>
                  <dd className="text-base font-medium">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
