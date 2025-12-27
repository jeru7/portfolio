"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

import Hero from "@/components/hero/Hero";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";
import Tagline from "@/components/tagline/Tagline";
import { SECTIONS } from "@/constants/sections";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // automatically scroll based on the hash value
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = SECTIONS.indexOf(hash);

    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(index, 0);
    }
  }, []);

  return (
    <Swiper
      modules={[Mousewheel]}
      direction="vertical"
      slidesPerView={1}
      mousewheel
      // replace the hash value based on the index
      onSlideChange={(swiper) => {
        const section = SECTIONS[swiper.activeIndex];
        if (section) {
          window.history.replaceState(null, "", `/#${section}`);
        }
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePage;
