"use client";

import { PERSONAL_INFO } from "@/constants/personal";
import { useSwiperContext } from "@/context/swiper/SwiperContext";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { swiper } = useSwiperContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (pathname === "/" && swiper) {
      swiper.slideTo(0, 700);
      return;
    }

    router.push("/#home");
  };

  return (
    <nav className="w-full fixed top-0 bg-background z-10 flex items-center justify-center">
      <div className="p-2 w-full min-w-80 md:w-200">
        <button
          className="text-accent font-bold text-base hover:cursor-pointer"
          onClick={handleBack}
        >
          {PERSONAL_INFO.NAME}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
