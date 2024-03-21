import HeroBanner from "@/components/Home/HeroBanner/heroBanner";
import LastProducts from "@/components/Home/LastProducts/lastProducts";
import NavigationCard from "@/components/Navigation/NavigationCard/navigationCard";
import Wrapper from "@/components/Wrapper/wrapper";

export default async function Home() {
  return (
    <>
      <HeroBanner />
      <main className="mb-48 lg:mb-64">
        <Wrapper className="grid gap-48">
          <NavigationCard />
          <LastProducts />
        </Wrapper>
      </main>
    </>
  );
}
