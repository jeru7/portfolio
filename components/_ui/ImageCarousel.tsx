"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MdWeb } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: {
    website: StaticImageData[];
    mobile: StaticImageData[];
  };
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const currentImages = isMobile ? images.mobile : images.website;

  // disable scroll when the fullscreen overlay appears
  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
  }, [isFullscreen]);

  return (
    <div className="h-fit w-full relative border border-foreground/50 rounded-sm p-2">
      {/* initial swiper */}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
      >
        {currentImages.map((image, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-80"
              onClick={() => {
                setIsFullscreen(true);
                setActiveIndex(i);
              }}
            >
              <Image
                src={image}
                alt="Sample image"
                fill
                priority
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* initial toggle button */}
      <ViewToggleButton
        isMobile={isMobile}
        setIsMobile={(isMobile) => setIsMobile(isMobile)}
      />

      {/* fullscreen overlay */}
      {isFullscreen && (
        <div className="bg-background h-dvh w-dvw fixed inset-0 rounded-sm min-w-80 z-50 md:p-8">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            initialSlide={activeIndex}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            className="h-full"
            spaceBetween={30}
          >
            {currentImages.map((image, i) => (
              <SwiperSlide key={i}>
                <div
                  className="relative w-full h-full"
                  onClick={() => {
                    setIsFullscreen(false);
                    setActiveIndex(i);
                  }}
                >
                  <Image
                    src={image}
                    alt="Sample image"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <ViewToggleButton
            isMobile={isMobile}
            setIsMobile={(isMobile) => setIsMobile(isMobile)}
          />
        </div>
      )}
    </div>
  );
};

// view toggle button component
const ViewToggleButton = ({
  isMobile,
  setIsMobile,
}: {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}) => {
  return (
    <div className="absolute bottom-0 right-0 bg-gray-400/20 z-10 p-1 rounded-tl-sm">
      <motion.button
        onClick={() => setIsMobile(!isMobile)}
        whileTap={{ scale: 0.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center justify-center w-10 h-10 text-white focus-ring:none hover:cursor-pointer"
        aria-label="Toggle view"
      >
        <AnimatePresence mode="wait">
          {isMobile ? (
            <motion.span
              key="mobile"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <CiMobile1 className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="web"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <MdWeb className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ImageCarousel;
