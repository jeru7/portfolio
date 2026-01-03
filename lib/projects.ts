import { Project } from "@/types/project.types";
import { FaGithub } from "react-icons/fa";

// chingutask imports
import chingutask_web_large_1 from "@/public/images/projects/chingutask/chingutask-web-large_1.png";
import chingutask_web_large_2 from "@/public/images/projects/chingutask/chingutask-web-large_2.png";
import chingutask_web_large_3 from "@/public/images/projects/chingutask/chingutask-web-large_3.png";
import chingutask_web_small_1 from "@/public/images/projects/chingutask/chingutask-web-small_1.png";
import chingutask_web_small_2 from "@/public/images/projects/chingutask/chingutask-web-small_2.png";
import chingutask_web_small_3 from "@/public/images/projects/chingutask/chingutask-web-small_3.png";

// mathpath imports
import mathpath_web_large_1 from "@/public/images/projects/mathpath/mathpath_web-large_1.png";
import mathpath_web_large_2 from "@/public/images/projects/mathpath/mathpath_web-large_2.png";
import mathpath_web_large_3 from "@/public/images/projects/mathpath/mathpath_web-large_3.png";
import mathpath_web_large_4 from "@/public/images/projects/mathpath/mathpath_web-large_4.png";
import mathpath_web_large_5 from "@/public/images/projects/mathpath/mathpath_web-large_5.png";
import mathpath_web_large_6 from "@/public/images/projects/mathpath/mathpath_web-large_6.png";
import mathpath_web_large_7 from "@/public/images/projects/mathpath/mathpath_web-large_7.png";
import mathpath_web_small_1 from "@/public/images/projects/mathpath/mathpath_web-small_1.png";
import mathpath_web_small_2 from "@/public/images/projects/mathpath/mathpath_web-small_2.png";
import mathpath_web_small_3 from "@/public/images/projects/mathpath/mathpath_web-small_3.png";
import mathpath_web_small_4 from "@/public/images/projects/mathpath/mathpath_web-small_4.png";
import mathpath_web_small_5 from "@/public/images/projects/mathpath/mathpath_web-small_5.png";
import mathpath_web_small_6 from "@/public/images/projects/mathpath/mathpath_web-small_6.png";
import mathpath_web_small_7 from "@/public/images/projects/mathpath/mathpath_web-small_7.png";
import mathpath_game_1 from "@/public/images/projects/mathpath/mathpath_game_1.png";
import mathpath_game_2 from "@/public/images/projects/mathpath/mathpath_game_2.png";
import mathpath_game_3 from "@/public/images/projects/mathpath/mathpath_game_3.png";
import mathpath_game_4 from "@/public/images/projects/mathpath/mathpath_game_4.png";

export const projects: Project[] = [
  // mathpath
  {
    title: "Math-Path 10",
    link: {
      repo: [
        {
          icon: FaGithub,
          name: "Game",
          url: "https://github.com/jeru7/MathPath-Unity",
        },
        {
          icon: FaGithub,
          name: "Website",
          url: "https://github.com/jeru7/MathPath-Web",
        },
        {
          icon: FaGithub,
          name: "Server",
          url: "https://github.com/jeru7/MathPath-Server",
        },
      ],
      website: "https://www.mathpath.site/#hero",
    },
    slug: "mathpath-10",
    technologies: ["ReactJS", "TypeScript", "NodeJS", "MongoDB", "Unity", "C#"],
    description: {
      short:
        "A mobile game and a website to track the student’s game progress.",
      long: "MathPath-10 is an educational platform developed for Probex School Inc. that combines gamified learning with web-based management for Grade 10 math. It includes a turn-based mobile game built in Unity where students solve math problems to progress, and a web application built with React.js, Tailwind CSS, and Shadcn that supports admins, teachers, and students in managing content, taking assessments, and tracking performance. Both systems are powered by a unified backend built with Node.js and Express, ensuring real-time synchronization of data and consistent user experience across platforms.",
    },
    features: [
      "The mobile game presents math problems in a turn-based format to make learning interactive and structured.",
      "Admins can manage sections, teachers, students, and view overall progress.",
      "Teachers can create and manage sections, students, and assessments, and monitor performance.",
      "Students can take assessments and track their own game progress on the website.",
    ],
    year: "2024-2025",
    isSolo: false,
    images: {
      website: {
        largeScreen: [
          mathpath_web_large_1,
          mathpath_web_large_2,
          mathpath_web_large_3,
          mathpath_web_large_4,
          mathpath_web_large_5,
          mathpath_web_large_6,
          mathpath_web_large_7,
        ],
        mobileScreen: [
          mathpath_web_small_1,
          mathpath_web_small_2,
          mathpath_web_small_3,
          mathpath_web_small_4,
          mathpath_web_small_5,
          mathpath_web_small_6,
          mathpath_web_small_7,
        ],
      },
      application: [
        mathpath_game_1,
        mathpath_game_2,
        mathpath_game_3,
        mathpath_game_4,
      ],
    },
    isMultiPlatform: true,
  },
  // chingutask
  {
    title: "ChinguTASK",
    link: {
      repo: [
        {
          icon: FaGithub,
          name: "Website",
          url: "https://github.com/chingu-voyages/v47-tier1-team-01",
        },
      ],
      website: "https://v47-tier01-team01-daily-task-app.netlify.app/",
    },
    slug: "chingutask",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: {
      short:
        "A simple task management website created by collaborating with other developers from chingu.",
      long: "ChinguTASK is a simple task management application developed as part of a 6-week sprint in the Chingu community. Built using JavaScript, HTML, and CSS, the app allows users to create tasks and view them on a calendar for easy organization and tracking. The project followed agile development practices with Trello for sprint planning and task management.",
    },
    features: [
      "Users can create, edit, and delete tasks.",
      "Tasks are displayed on a calendar for a clear overview of schedules.",
      "Simple, responsive, and clean interface built with JavaScript, HTML, and CSS.",
    ],
    year: "2024",
    isSolo: false,
    images: {
      website: {
        largeScreen: [
          chingutask_web_large_1,
          chingutask_web_large_2,
          chingutask_web_large_3,
        ],
        mobileScreen: [
          chingutask_web_small_1,
          chingutask_web_small_2,
          chingutask_web_small_3,
        ],
      },
    },
    isMultiPlatform: false,
  },
];
