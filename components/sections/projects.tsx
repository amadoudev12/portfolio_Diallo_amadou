import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjectIndex, projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projets" aria-labelledby="projets-titre" className="border-t border-line">
      <Container className="py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            id="projets-titre"
            index="02"
            label="Projets"
            title="Deux projets, deux besoins concrets."
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {projects.map((project, position) => (
            <Reveal key={project.slug}>
              <ProjectCard
                project={project}
                index={getProjectIndex(project.slug)}
                reversed={position % 2 === 1}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
