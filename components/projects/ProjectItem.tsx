// local imports
import { Project } from "@/types/project.types";
import { IoPeople, IoPerson } from "react-icons/io5";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <li className="border-l border-l-accent p-2 flex opacity-80 hover:opacity-100 duration-200 hover:cursor-pointer">
      {/* left section */}
      <section className="flex flex-col flex-1">
        <header>
          <p className="text-lg">{project.title}</p>
        </header>
        <p className="text-sm font-normal">{project.description}</p>
        <p className="text-xs font-normal italic">{project.year}</p>
      </section>
      {/* right section */}
      <section>
        {project.isSolo ? (
          <IoPerson className="h-4 w-4" title="Solo project" />
        ) : (
          <IoPeople className="h-4 w-4" title="Collaborated project" />
        )}
      </section>
    </li>
  );
};

export default ProjectItem;
