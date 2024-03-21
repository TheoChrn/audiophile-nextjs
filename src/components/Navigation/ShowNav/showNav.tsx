"use client";
import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import MobileNavigation from "../MobileNavigation/mobileNavigation";
import BurgerTrigger from "../MobileNavigation/BurgerTrigger/burgerTrigger";
import DesktopNavigation from "../DesktopNavigation/desktopNavigation";

const ShowNav = () => {
  const isMobile = useIsMobile();
  return (
    <nav className="order-1 flex items-center justify-center text-subtitle lg:order-3">
      {(isMobile === undefined || isMobile) && (
        <>
          <BurgerTrigger />
          <menu
            className={`absolute inset-x-0 top-full z-10 flex h-fit flex-col justify-center gap-4 bg-secondary py-5 lg:static lg:hidden lg:flex-row lg:gap-[3.6rem] `}
          >
            <MobileNavigation />
          </menu>
        </>
      )}
      {(isMobile === undefined || !isMobile) && (
        <menu
          className={`absolute inset-x-0 top-full z-10 hidden h-fit flex-col justify-center gap-4 bg-secondary duration-200 lg:static lg:flex lg:flex-row lg:gap-[3.6rem]`}
        >
          <DesktopNavigation />
        </menu>
      )}
    </nav>
  );
};

export default ShowNav;
