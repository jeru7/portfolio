"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperContext } from "./SwiperContext";

const SwiperProvider = ({ children }: { children: React.ReactNode }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <SwiperContext.Provider value={{ swiper, setSwiper }}>
      {children}
    </SwiperContext.Provider>
  );
};

export default SwiperProvider;
