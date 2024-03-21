import About from "@/components/About/about";
import Wrapper from "@/components/Wrapper/wrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Wrapper className="mb-48 grid gap-48 lg:mb-64 lg:gap-y-64">
        <About />
      </Wrapper>
    </>
  );
}
