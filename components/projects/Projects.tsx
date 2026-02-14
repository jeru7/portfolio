"use client";

// local imports
import ProjectItem from "./ProjectItem";
import { projects } from "@/lib/projects";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();

  const openProject = (slug: string) => {
    router.push(`/projects/${slug}`);
    localStorage.setItem("atHome", "false");
    localStorage.setItem("showSlash", "false");
  };

  return (
    <section className="h-full w-full p-2 flex flex-col gap-4 justify-center md:w-200 mx-auto">
      <h2 className="text-accent">Projects</h2>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <ProjectItem
            project={project}
            key={project.title}
            onClick={() => openProject(project.slug)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
