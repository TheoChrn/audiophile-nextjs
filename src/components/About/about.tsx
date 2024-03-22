import React from "react";

const About = () => {
  return (
    <section className="grid grid-rows-[minmax(30rem,_1fr)] gap-y-16 lg:grid-cols-2 lg:grid-rows-[58.8rem]">
      <figure className="h-full rounded bg-[url('/assets/shared/mobile/image-best-gear.jpg')] bg-cover bg-no-repeat md:bg-[url('/assets/shared/tablet/image-best-gear.jpg')] lg:col-start-2 lg:row-start-1 lg:bg-[url('/assets/shared/desktop/image-best-gear.jpg')]"></figure>
      <div className="flex flex-col justify-center gap-medium  text-center lg:col-start-1 lg:row-start-1 lg:pr-[12.5rem] lg:text-start">
        <h4 className="text-h4 uppercase md:text-h2 ">
          Bringing you the <strong className="text-accent">best</strong> audio
          gear
        </h4>
        <p className="text-base text-primary-body">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
