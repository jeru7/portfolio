"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import Hero from "@/components/hero/Hero";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";
import Tagline from "@/components/tagline/Tagline";
import { SECTIONS } from "@/constants/sections";
import { useSwiperContext } from "@/context/swiper/SwiperContext";

const getHash = () => {
  if (typeof window === "undefined") return "home";
  return window.location.hash.replace("#", "") || "home";
};

const HomePage = () => {
  const { setSwiper } = useSwiperContext();
  const hash = getHash();

  const initialSlide = Math.max(SECTIONS.indexOf(hash), 0);

  return (
    <Swiper
      key={hash}
      modules={[Mousewheel]}
      direction="vertical"
      slidesPerView={1}
      mousewheel
      initialSlide={initialSlide}
      onSwiper={(swiper) => setSwiper(swiper)}
      onSlideChange={(swiper) => {
        const section = SECTIONS[swiper.activeIndex];
        if (section) {
          window.history.replaceState(null, "", `/#${section}`);
        }
      }}
      className="h-screen w-full min-w-80 overflow-hidden font-bold text-3xl md:w-200"
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
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePage;
