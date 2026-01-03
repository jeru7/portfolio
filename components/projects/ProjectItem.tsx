// local imports
import { Project } from "@/types/project.types";
// icons
import { IoPeople, IoPerson } from "react-icons/io5";

interface ProjectItemProps {
  project: Project;
  onClick: () => void;
}

const ProjectItem = ({ project, onClick }: ProjectItemProps) => {
  return (
    <li
      className="border-l border-l-foreground p-2 flex hover:cursor-pointer group hover:border-l-accent transition-colors duration-200"
      onClick={onClick}
    >
      {/* left section */}
      <section className="flex flex-col flex-1">
        <header>
          <p className="text-lg text-foreground group-hover:text-accent transition-colors duration-200">
            {project.title}
          </p>
        </header>
        <p className="text-sm font-normal text-foreground group-hover:text-accent transition-colors duration-200">
          {project.description.short}
        </p>
        <p className="text-xs font-normal italic text-foreground group-hover:text-accent transition-colors duration-200">
          {project.year}
        </p>
      </section>
      {/* right section */}
      <section>
        {project.isSolo ? (
          <IoPerson
            className="h-4 w-4 text-foreground group-hover:text-accent transition-colors duration-200"
            title="Solo project"
          />
        ) : (
          <IoPeople
            className="h-4 w-4 text-foreground group-hover:text-accent transition-colors duration-200"
            title="Collaborated project"
          />
        )}
      </section>
    </li>
  );
};

export default ProjectItem;
