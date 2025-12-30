"use client";

import { motion } from "motion/react";
import { socMeds } from "@/lib/socials";
import Button from "../_ui/Button";

const Hero = () => {
  return (
    <section className="h-full flex flex-col justify-center gap-2 p-2 relative">
      <h1 className="">
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
      </h1>
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
              className="cursor-pointer hover:text-accent transition-colors duration-200"
            >
              {<social.icon className="w-6 h-6" />}
            </a>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center justify-center absolute bottom-32 left-1/2 -translate-x-1/2">
        {/* download cv button */}
        {/* TODO: download cv */}
        <Button
          content="Download CV"
          onClick={() => console.log("Download cv")}
        />
        {/* view projects button */}
        {/* TODO: view projects */}
        <Button
          content="View Projects"
          onClick={() => console.log("View Projects")}
        />
      </div>
    </section>
  );
};

export default Hero;
