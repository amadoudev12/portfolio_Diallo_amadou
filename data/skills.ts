export type SkillCategory = {
  name: string;
  skills: readonly string[];
};

export const skillCategories: readonly SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Bases de données et ORM",
    skills: ["MySQL", "Prisma"],
  },
];
