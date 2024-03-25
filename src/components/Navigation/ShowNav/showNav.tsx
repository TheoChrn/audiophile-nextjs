"use client";
import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import MobileNavigation from "../MobileNavigation/mobileNavigation";
import BurgerTrigger from "../MobileNavigation/BurgerTrigger/burgerTrigger";
import DesktopNavigation from "../DesktopNavigation/desktopNavigation";
import { useMenuStore } from "@/store/menuStore";

const ShowNav = () => {
  const isMobile = useIsMobile();
  const isMenuOpen = useMenuStore((state) => state.menuIsOpen);
  return (
    <nav className="order-1 h-full flex items-center justify-center text-subtitle lg:order-3">
      {(isMobile === undefined || isMobile) && (
        <>
          <BurgerTrigger />
          <menu
            className={`absolute inset-x-0 top-full z-50 flex ${
              isMenuOpen ? "py-5 px-[2rem] h-fit" : "py-0 h-0"
            } flex-col justify-center bg-secondary text-secondary-foreground h-fit gap-4 lg:static lg:hidden lg:flex-row lg:gap-[3.6rem] transition-200 `}
          >
            <MobileNavigation />
          </menu>
        </>
      )}
      {(isMobile === undefined || !isMobile) && (
        <menu
          className={`absolute inset-x-0 top-full z-10 hidden h-1/2 flex-col justify-center gap-4 duration-200 lg:static lg:flex lg:flex-row lg:gap-[3.6rem]`}
        >
          <DesktopNavigation />
        </menu>
      )}
    </nav>
  );
};

export default ShowNav;
