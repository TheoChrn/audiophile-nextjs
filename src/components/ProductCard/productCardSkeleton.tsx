import React from "react";

const ProductCardSkeleton = ({ index }: { index?: number }) => {
  return (
    <article
      className={`grid gap-y-medium md:gap-y-[5.2rem] lg:flex lg:gap-x-[12.5rem] ${
        index && index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="h-[35.2rem] w-full  animate-pulse rounded bg-slate-300 lg:h-[56rem] lg:flex-[0_0_50%]"></div>
      <div className="flex flex-1 flex-col justify-center gap-y-small lg:items-start lg:gap-y-16 ">
        <div className="grid size-fit gap-y-[0.8rem]">
          <span className="h-14 w-[40ch] animate-pulse rounded-full bg-slate-300 "></span>
          <span className="h-14 w-[35ch] animate-pulse rounded-full  bg-slate-300"></span>
        </div>
        <div className="grid h-fit w-full gap-y-[1.4rem]">
          <span className="h-4 animate-pulse rounded-full bg-slate-300"></span>
          <span className="h-4  w-[85%] animate-pulse rounded-full bg-slate-300"></span>
          <span className="h-4  w-[90%] animate-pulse rounded-full bg-slate-300"></span>
          <span className="h-4 w-3/4 animate-pulse rounded-full bg-slate-300"></span>
        </div>
        <div className="h-24 w-80 animate-pulse justify-self-center bg-slate-300"></div>
      </div>
    </article>
  );
};

export default ProductCardSkeleton;
