"use client";

import { PERSONAL_INFO } from "@/constants/personal";

const Navbar = () => {
  return (
    <nav className="w-full p-2">
      <h1 className="text-accent font-bold text-base">{PERSONAL_INFO.NAME}</h1>
    </nav>
  );
};

export default Navbar;
