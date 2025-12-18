import { Project } from "@/types/project.types";
import ProjectItem from "./ProjectItem";

const projects: Project[] = [
  {
    title: "MathPath",
    description:
      "A mobile game and a website to track the student’s game progress.",
    year: "2024-2025",
    isSolo: false,
  },
  {
    title: "ChinguTASK",
    description:
      "A simple task management website created by collaborating with other developers from chingu.",
    year: "2024",
    isSolo: false,
  },
  {
    title: "TaiyoList",
    description: "A grocery list manager mobile application.",
    year: "2024",
    isSolo: false,
  },
];

const Projects = () => {
  return (
    <section className="h-screen">
      <article className="flex flex-col h-full gap-4">
        <p>Here's some of my projects</p>
        <ul className="flex flex-col gap-2">
          {projects.map((project) => (
            <ProjectItem project={project} key={project.title} />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Projects;
