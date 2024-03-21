import Wrapper from "@/components/Wrapper/wrapper";
import LinkButton from "@/components/ui/linkButton";

const HeroBanner = () => {
  return (
    <section className="relative bg-secondary bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-center  bg-no-repeat text-center  uppercase text-secondary-foreground mix-blend-darken md:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] lg:text-start">
      <div className="bg-black/45">
        <Wrapper className="border-t border-primary-darkest">
          <div className="flex h-[51rem] flex-col items-center justify-center gap-small lg:h-[63.9rem] lg:w-1/2  lg:items-start">
            <p className="text-overline text-primary-darker">New product</p>
            <h1 className="text-h2  md:text-h1">XX99 Mark II headphones</h1>
            <p className="text-base text-primary-darken ">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <LinkButton
              href={"/headphones/xx99-mark-two-headphones"}
              variant="accent"
              customClassName="lg:mt-[1.6rem]"
            >
              See Product
            </LinkButton>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default HeroBanner;
