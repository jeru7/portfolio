// local imports
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
];

const Projects = () => {
  return (
    <section className="h-full p-2 flex flex-col gap-4 justify-center">
      <h2>Projects</h2>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
