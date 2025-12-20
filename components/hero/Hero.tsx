"use client";

import { socMeds } from "@/lib/socials";

const Hero = () => {
  return (
    <section className="h-full flex flex-col justify-center gap-2 p-2">
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
              {<social.icon className="w-6 h-6" />}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
