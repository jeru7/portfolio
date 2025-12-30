import { IconType } from "react-icons";

export interface Project {
  title: string;
  link: ProjectLink[];
  slug: string;
  technologies: string[];
  description: {
    short: string;
    long: string;
  };
  features: string[];
  year: string;
  isSolo: boolean;
  images: string[];
}

interface ProjectLink {
  icon: IconType;
  name: string;
  url: string;
}
