"use client";
import { useMenuStore } from "@/store/menuStore";
import Menu from "../Menu/menu";

const MobileNavigation = () => {
  const isMenuOpen = useMenuStore((state) => state.menuIsOpen);
  return <>{isMenuOpen && <Menu />}</>;
};

export default MobileNavigation;
