"use client";

import { SocialMedia } from "@/types/social.types";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const socMeds: SocialMedia[] = [
  {
    title: "Github",
    icon: <FaGithub className="h-6 w-6" />,
    link: "https://github.com/jeru7",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6" />,
    link: "https://www.linkedin.com/in/jeru7/",
  },
  {
    title: "Facebook",
    icon: <FaFacebook className="h-6 w-6" />,
    link: "https://www.facebook.com/jeruuu.7/",
  },
];

const Hero = () => {
  return (
    <section className="h-screen">
      <article className="h-full flex flex-col justify-center gap-2">
        <p className="">
          Hi, I’m Emmanuel.
          <br />
          An aspiring <span className="text-accent">
            full stack developer
          </span>{" "}
          from Philippines.
        </p>
        <div className="flex gap-2">
          {socMeds.map((social, index) => (
            <div
              className="flex items-center justify-center"
              key={index}
              title={social.title}
            >
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Hero;
