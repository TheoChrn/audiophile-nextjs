import CartTrigger from "@/components/Cart/CartTrigger/cartTrigger";
import Logo from "@/components/Logo/logo";
import Wrapper from "@/components/Wrapper/wrapper";
import Link from "next/link";
import React from "react";
import Bar from "./bar";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="bg-secondary text-secondary-foreground">
      <Wrapper className="relative flex opacity-0 -translate-y-1/4 h-36 items-center justify-between animate-fade-in-top delay-100">
        <Bar />
        <Link href={"/"} className="order-2 flex items-center">
          <span className="sr-only">Logo</span>
          <Logo />
        </Link>
        {children}
        <CartTrigger />
      </Wrapper>
    </header>
  );
};

export default Header;
