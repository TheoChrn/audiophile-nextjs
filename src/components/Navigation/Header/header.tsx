import CartTrigger from "@/components/Cart/CartTrigger/cartTrigger";
import Logo from "@/components/Logo/logo";
import Wrapper from "@/components/Wrapper/wrapper";
import Link from "next/link";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="bg-secondary text-secondary-foreground">
      <Wrapper className="relative flex  h-36 items-center justify-between">
        <Link href={"/"} className="order-2 flex items-center">
          <Logo />
        </Link>
        {children}
        <CartTrigger />
      </Wrapper>
    </header>
  );
};

export default Header;
