"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

import Hero from "@/components/hero/Hero";
import LetsConnect from "@/components/lets-connect/LetsConnect";
import Projects from "@/components/projects/Projects";
import Tagline from "@/components/tagline/Tagline";

const HomePage = () => {
  return (
    <Swiper
      modules={[Mousewheel]}
      direction="vertical"
      slidesPerView={1}
      mousewheel
      pagination={{ clickable: true }}
      className="h-screen w-screen overflow-hidden font-bold text-4xl"
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>

      <SwiperSlide>
        <Tagline />
      </SwiperSlide>

      <SwiperSlide>
        <Projects />
      </SwiperSlide>

      <SwiperSlide>
        <LetsConnect />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePage;
