"use client";

import { motion } from "motion/react";
import { socMeds } from "@/lib/socials";
import Button from "../_ui/Button";
import { useSwiperContext } from "@/context/swiper/SwiperContext";

const Hero = () => {
  const { swiper } = useSwiperContext();

  const handleViewProjects = () => {
    swiper?.slideTo(2, 700); // 2: index of the #project section
  };

  return (
    <section className="h-full flex flex-col justify-center gap-2 p-2 relative md:w-200 mx-auto">
      <h1 className="">
        Hi, I’m Emmanuel.
        <br />A{" "}
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
        <a
          href="/UNGAB_RESUME.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="group text-sm border border-foreground rounded-md hover:cursor-pointer hover:border-accent transition-colors duration-200 px-3 py-1 text-nowrap"
        >
          View CV
        </a>
        {/* view projects button */}
        <Button content="View Projects" onClick={handleViewProjects} />
      </div>
    </section>
  );
};

export default Hero;
