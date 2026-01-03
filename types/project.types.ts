import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Project {
  title: string;
  link: {
    repo: ProjectLink[];
    website?: string;
  };
  slug: string;
  technologies: string[];
  description: {
    short: string;
    long: string;
  };
  features: string[];
  year: string;
  isSolo: boolean;
  images: {
    website: {
      largeScreen: StaticImageData[];
      mobileScreen: StaticImageData[];
    };
    application?: StaticImageData[];
  };
  isMultiPlatform: boolean;
}

interface ProjectLink {
  icon: IconType;
  name: string;
  url: string;
}
