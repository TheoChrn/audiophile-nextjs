import About from "@/components/About/about";
import NavigationCard from "@/components/Navigation/NavigationCard/navigationCard";
import Wrapper from "@/components/Wrapper/wrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Wrapper className="mb-48 mt-[17.2rem] lg:mt-[24rem] grid gap-[12rem] lg:my-64 md:gap-y-[16rem]">
        <NavigationCard />
        <About />
      </Wrapper>
    </main>
  );
}
