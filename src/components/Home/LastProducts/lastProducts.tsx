import LinkButton from "@/components/ui/linkButton";

const LastProducts = () => {
  return (
    <section className="flex flex-col gap-small md:gap-medium lg:gap-[4.8rem]">
      <article className="grid items-center overflow-hidden rounded bg-accent px-10 sm:px-0  gap-y-[6.4rem] py-[5.5rem] text-center lg:grid-cols-[57%_42%] lg:text-start">
        <div className="relative m-auto flex size-full items-center justify-center lg:translate-y-28 ">
          <figure className="relative z-10 h-[207px] w-[172.5px] bg-[url('/assets/home/mobile/image-speaker-zx9.png')] bg-contain bg-no-repeat md:h-[237px]  md:w-[197.21px]  md:bg-[url('/assets/home/tablet/image-speaker-zx9.png')]  lg:h-[483px] lg:w-[400.23px] lg:bg-[url('/assets/home/desktop/image-speaker-zx9.png')] animate-grow delay-200 lg:delay-700"></figure>
          <div className="absolute  left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 animate-beatsm rounded-full border-4 border-white/15 delay-250 lg:delay-100"></div>
          <div className="absolute  left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 animate-beat rounded-full border-4 border-white/15 delay-350 lg:delay-500"></div>
          <div className="absolute  left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 animate-beatlg rounded-full border-4 border-white/15 delay-700 lg:delay-900"></div>
        </div>
        <div className="flex flex-col items-center gap-y-small lg:m-auto lg:items-start justify-center h-full w-full">
          <h2 className="flex flex-col text-h2  font-bold uppercase text-accent-foreground md:text-h1">
            <span>ZX9</span>
            <span>Speaker</span>
          </h2>
          <p className="max-w-[40ch] text-base text-white/75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <LinkButton
            href={"/speakers/zx9-speaker"}
            variant="secondary"
            customClassName="z-[1] w-fit mt-[1.6rem]"
          >
            See Product
          </LinkButton>
        </div>
      </article>
      <article className="flex h-[32rem] w-full flex-col justify-center gap-y-medium pl-small md:pl-[6.2rem] lg:pl-[9.5rem] rounded bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')]  bg-cover  bg-no-repeat md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]">
        <h2 className="text-h4 font-bold uppercase text-primary-foreground ">
          ZX7 Speaker
        </h2>
        <LinkButton
          href={"/speakers/zx7-speaker"}
          variant="outline"
          customClassName="z-[1] w-fit"
        >
          See Product
        </LinkButton>
      </article>
      <article className=" flex flex-col  gap-small md:flex-row">
        <figure className="h-80 flex-auto rounded bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] bg-cover  bg-no-repeat  md:h-[32rem] md:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')] lg:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]"></figure>
        <div className="flex h-80 flex-col justify-center gap-medium rounded bg-card py-[4.1rem] pl-small md:h-[32rem] md:flex-[0_0_50%] md:pl-[4.1rem] lg:pl-[9.5rem]">
          <h2 className="text-h4 font-bold uppercase  text-primary-foreground">
            YX1 Earphones
          </h2>
          <LinkButton
            href={"/earphones/yx1-earphones"}
            variant="outline"
            customClassName="z-[1] w-fit"
          >
            See Product
          </LinkButton>
        </div>
      </article>
    </section>
  );
};

export default LastProducts;
