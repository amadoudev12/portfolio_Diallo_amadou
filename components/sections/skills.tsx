import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="competences" aria-labelledby="competences-titre" className="border-t border-line">
      <Container className="py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            id="competences-titre"
            index="03"
            label="Compétences"
            title="Les technologies avec lesquelles je travaille."
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-16 border-t border-line">
          {skillCategories.map((category, position) => (
            <Reveal key={category.name} delay={0.06 * position}>
              <div className="grid gap-6 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10">
                <h3 className="flex items-baseline gap-3 text-lg font-medium tracking-tight md:col-span-4">
                  {category.name}
                  <span aria-hidden="true" className="font-mono text-xs font-normal text-muted">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </h3>

                <ul className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-8">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                    >
                      <span aria-hidden="true" className="size-1.5 shrink-0 bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
