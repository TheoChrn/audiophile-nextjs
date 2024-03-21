"use client";

import BurgerIcon from "@/components/Icons/burgerIcon";
import { useMenuStore } from "@/store/menuStore";

const BurgerTrigger = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  return (
    <button onClick={toggleMenu} className="block lg:hidden">
      <BurgerIcon />
    </button>
  );
};

export default BurgerTrigger;
