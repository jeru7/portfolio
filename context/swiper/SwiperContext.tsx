"use client";

import { createContext, useContext } from "react";
import type { Swiper as SwiperType } from "swiper";

interface SwiperContextType {
  swiper: SwiperType | null;
  setSwiper: (swiper: SwiperType) => void;
}

export const SwiperContext = createContext<SwiperContextType | undefined>(
  undefined,
);

export const useSwiperContext = () => {
  const context = useContext(SwiperContext);

  if (!context) {
    throw new Error(
      "useSwiperContext can be use only inside the SwiperProvider.",
    );
  }

  return context;
};
