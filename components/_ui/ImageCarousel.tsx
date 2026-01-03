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
import { TbExternalLink } from "react-icons/tb";

interface ImageCarouselProps {
  images: {
    website: {
      largeScreen: StaticImageData[];
      mobileScreen: StaticImageData[];
    };
    application?: StaticImageData[];
  };
  website?: string;
  isMultiPlatform: boolean;
}

const ImageCarousel = ({
  images,
  website,
  isMultiPlatform,
}: ImageCarouselProps) => {
  const [isWebsite, setIsWebsite] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImages = isWebsite
    ? isMobile
      ? images.website.mobileScreen
      : images.website.largeScreen
    : images.application; // application images

  // disable scroll on full screen
  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
  }, [isFullscreen]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-background">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
      >
        {currentImages?.map((image, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-80 w-full cursor-zoom-in"
              onClick={() => {
                setIsFullscreen(true);
                setActiveIndex(i);
              }}
            >
              <Image
                src={image}
                alt="Project preview"
                fill
                priority
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* visit website button */}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 rounded-md bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur transition hover:bg-black/75"
        >
          <TbExternalLink className="h-4 w-4" />
          Visit site
        </a>
      )}

      {/* view control buttons */}
      <ViewControlButton
        isWebsite={isWebsite}
        setIsWebsite={setIsWebsite}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
        isMultiPlatform={isMultiPlatform}
      />

      {/* fullscreen overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background p-4 md:p-10"
          >
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              initialSlide={activeIndex}
              onSlideChange={(s) => setActiveIndex(s.activeIndex)}
              className="h-full"
            >
              {currentImages?.map((image, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="relative h-full w-full cursor-zoom-out"
                    onClick={() => setIsFullscreen(false)}
                  >
                    <Image
                      src={image}
                      alt="Fullscreen preview"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* view control buttons */}
            <ViewControlButton
              isWebsite={isWebsite}
              setIsWebsite={setIsWebsite}
              isMobile={isMobile}
              setIsMobile={setIsMobile}
              isMultiPlatform={isMultiPlatform}
            />

            {/* visit site button */}
            {website && isWebsite && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 z-50 inline-flex items-center gap-1 rounded-md bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur transition hover:bg-black/75"
              >
                <TbExternalLink className="h-4 w-4" />
                Visit site
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ViewControlButton = ({
  isWebsite,
  setIsWebsite,
  isMobile,
  setIsMobile,
  isMultiPlatform,
}: {
  isWebsite: boolean;
  setIsWebsite: (isWebsite: boolean) => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  isMultiPlatform: boolean;
}) => {
  return (
    <div className="absolute bottom-3 right-3 z-10 flex rounded-md bg-black/60 backdrop-blur">
      {isWebsite && (
        <motion.button
          onClick={() => setIsMobile(!isMobile)}
          whileTap={{ scale: 0.9 }}
          className="flex h-10 w-10 items-center justify-center text-white transition hover:bg-white/10"
          aria-label="Toggle device view"
        >
          {isMobile ? (
            <CiMobile1 className="h-4 w-4" />
          ) : (
            <MdWeb className="h-4 w-4" />
          )}
        </motion.button>
      )}

      {isMultiPlatform && (
        <motion.button
          onClick={() => setIsWebsite(!isWebsite)}
          whileTap={{ scale: 0.9 }}
          className="flex h-10 items-center px-3 text-sm text-white transition hover:bg-white/10"
          aria-label="Toggle platform"
        >
          {isWebsite ? "Website" : "Application"}
        </motion.button>
      )}
    </div>
  );
};

export default ImageCarousel;
