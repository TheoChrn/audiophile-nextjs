"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Bar = () => {
  const pathName = usePathname();

  const showBar =
    pathName === "/" ||
    pathName === "/headphones" ||
    pathName === "/speakers" ||
    pathName === "/earphones";

  return (
    <div
      className={`absolute bottom-0 left-0 w-full scale-0 ${
        showBar && "h-[0.2rem]"
      } bg-primary-darkest animate-grow-bar delay-400`}
    ></div>
  );
};

export default Bar;
