import Logo from "../Logo/logo";
import Menu from "../Navigation/Menu/menu";
import Wrapper from "../Wrapper/wrapper";
import SocialMedias from "./socialMedias";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Wrapper className="relative grid justify-center gap-[4.8rem] py-[4.8rem] text-center md:grid-cols-2 md:text-start">
        <div className=" absolute left-1/2 top-0 h-[0.4rem] w-40 -translate-x-1/2 bg-accent md:left-16 md:-translate-x-0"></div>
        <figure className="flex items-center justify-center md:col-span-2 md:row-start-1 md:justify-start lg:col-span-1">
          <Logo />
        </figure>
        <menu className="flex w-full flex-col items-center justify-center gap-x-[3.4rem] gap-y-[1.6rem] text-subtitle text-secondary-foreground md:col-span-2 md:row-start-2 md:flex-row md:justify-start lg:col-start-2 lg:row-start-1 lg:justify-end">
          <Menu />
        </menu>
        <p className="text-base text-white/50 md:col-span-2 md:row-start-3 lg:col-span-1 lg:row-start-2">
          {` Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.`}
        </p>
        <p className="text-base font-bold text-white/50 md:col-start-1 md:row-start-5 lg:row-start-3 lg:mt-10">
          {`Copyright 2021. All Rights Reserved`}
        </p>
        <SocialMedias />
      </Wrapper>
    </footer>
  );
};

export default Footer;
