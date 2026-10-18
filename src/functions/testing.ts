interface Project {
  title: string;
  tech: string[];
  done: boolean;
}

const projects: Project[] = [
  { title: "Library Platform", tech: ["React", "TypeScript"], done: true },
  { title: "Banking API", tech: ["Node", "Express"], done: true },
  { title: "Portfolio", tech: ["React", "Tailwind"], done: false },
];

function finishedTitles(projects: Project[]): string[] {
  const finishedProjects = projects.filter((project) => project.done);
  const finishedTitles = finishedProjects.map((project) => project.title);
  return finishedTitles;
}

function usesTech(projects: Project[], tech: string): Project[] {
  const techProjects = projects.filter((projects) => projects.tech.includes(tech));
  return techProjects;
}

function countByTech(projects: Project[]): Record<string, number> {
//   const techCount = { React: 0, TypeScript: 0, Node: 0, Express: 0, Tailwind: 0 };
  const techCounts:Record<string,number> = {};
  for (const project of projects) {
    for (const tech of project.tech) {
      techCounts[tech] = (techCounts[tech] ? techCounts[tech] + 1 : techCounts[tech] = 1);
    }
  }
  return techCounts;
}

function countByTech2(projects: Project[]): Record<string, number> {
//   const techCount = { React: 0, TypeScript: 0, Node: 0, Express: 0, Tailwind: 0 };
  const techCounts:Record<string,number> = {};
  for (const project of projects) {
    for (const tech of project.tech) {
      techCounts[tech] = (techCounts[tech] || 0) + 1;
    }
  }
  return techCounts;
}
