"use client";

import { motion } from "motion/react";
import { socMeds } from "@/lib/socials";

const Hero = () => {
  return (
    <section className="h-full flex flex-col justify-center gap-2 p-2">
      <p className="">
        Hi, I’m Emmanuel.
        <br />
        An aspiring{" "}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-accent inline-block"
        >
          full stack developer
        </motion.span>{" "}
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
