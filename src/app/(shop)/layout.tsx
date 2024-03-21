import About from "@/components/About/about";
import NavigationCard from "@/components/Navigation/NavigationCard/navigationCard";
import Wrapper from "@/components/Wrapper/wrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Wrapper className="mb-48 mt-[17.2rem] grid gap-48 lg:my-64 lg:gap-y-64">
        <NavigationCard />
        <About />
      </Wrapper>
    </>
  );
}
