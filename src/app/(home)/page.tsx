import HeroBanner from "@/components/Home/HeroBanner/heroBanner";
import LastProducts from "@/components/Home/LastProducts/lastProducts";
import NavigationCard from "@/components/Navigation/NavigationCard/navigationCard";
import Wrapper from "@/components/Wrapper/wrapper";

export default async function Home() {
  return (
    <>
      <HeroBanner />
      <main className="mb-48 lg:mb-64 mt-[9.2rem] md:mt-[14.8rem] lg:mt-[20rem]">
        <Wrapper className="grid gap-y-[12rem] md:gap-y-[9.6rem] lg:gap-y-[16.8rem]">
          <NavigationCard />
          <LastProducts />
        </Wrapper>
      </main>
    </>
  );
}
