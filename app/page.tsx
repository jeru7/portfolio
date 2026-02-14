"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import Hero from "@/components/hero/Hero";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";
import Tagline from "@/components/tagline/Tagline";
import SplashScreen from "@/components/splash/SplashScreen";
import { SECTIONS } from "@/constants/sections";
import { useSwiperContext } from "@/context/swiper/SwiperContext";

const getHash = () => {
  if (typeof window === "undefined") return "home";
  return window.location.hash.replace("#", "") || "home";
};

const HomePage = () => {
  const { setSwiper, swiper } = useSwiperContext();
  const hash = getHash();

  useEffect(() => {
    if (!swiper) return;

    const index = SECTIONS.indexOf(hash);

    const timer = setTimeout(() => {
      swiper?.slideTo(index, 700);
    }, 500);

    return () => clearTimeout(timer);
  }, [swiper, hash]);

  return (
    <Swiper
      key={hash}
      modules={[Mousewheel]}
      direction="vertical"
      slidesPerView={1}
      mousewheel
      onSwiper={(swiper) => setSwiper(swiper)}
      onSlideChange={(swiper) => {
        const section = SECTIONS[swiper.activeIndex];
        if (section) {
          window.history.replaceState(null, "", `/#${section}`);
        }
      }}
      className="h-screen w-full min-w-80 overflow-hidden font-bold text-3xl"
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

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const validHashes = ["home", "tagline", "projects", "contact"];
    const currentHash = getHash();

    if (validHashes.includes(currentHash)) {
      setShowSplash(true);
      sessionStorage.setItem("splashShown", "true");
    }

    setMounted(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (!mounted) return null;

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && <HomePage />}
    </>
  );
}
