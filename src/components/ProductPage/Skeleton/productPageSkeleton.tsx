import ProductCardSkeleton from "@/components/ProductCard/productCardSkeleton";
import React from "react";

const ProductPageSkeleton = () => {
  return (
    <>
      <ProductCardSkeleton />
      <div className="flex flex-col gap-x-[12.5rem] gap-y-48 lg:flex-row">
        <div className="flex flex-col gap-y-small lg:flex-[0_0_60%] lg:gap-y-medium ">
          <span className="h-14 w-[40ch] animate-pulse rounded-full bg-slate-300"></span>
          <div className="grid gap-y-[0.8rem]">
            <span className="h-4 w-full animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[91%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[95%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[94%] animate-pulse rounded-full bg-slate-300"></span>
            <br />
            <span className="h-4 w-[85%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[93%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[88%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[82%] animate-pulse rounded-full bg-slate-300"></span>
          </div>
        </div>
        <div className="flex flex-col gap-y-small md:flex-row lg:flex-auto lg:flex-col lg:gap-y-medium">
          <span className="h-14 w-[40ch] animate-pulse rounded-full bg-slate-300 md:flex-[0_0_50%] lg:flex-none"></span>
          <div className="grid gap-y-[0.8rem] md:flex-auto lg:flex-none">
            <span className="h-4 w-[82%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[82%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[82%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[82%] animate-pulse rounded-full bg-slate-300"></span>
            <span className="h-4 w-[82%] animate-pulse rounded-full bg-slate-300"></span>
          </div>
        </div>
      </div>
      <div>
        <div className="grid gap-[0.8rem] md:h-[36.8rem] md:grid-cols-2 md:gap-[1.8rem] lg:h-[59.2rem] lg:gap-12">
          <div className="animate-pulse overflow-hidden rounded bg-slate-300"></div>
          <div className="animate-pulse overflow-hidden rounded bg-slate-300"></div>
          <div className="animate-pulse overflow-hidden rounded bg-slate-300 md:col-start-2 md:row-span-2 md:row-start-1"></div>
        </div>
      </div>
      <div className="grid">
        <span className="mx-auto h-14 w-[60ch] animate-pulse rounded-full bg-slate-300"></span>
        <div className="mt-16 flex flex-col gap-x-[1.1rem] gap-y-[5.6rem] sm:flex-row md:mt-[5.6rem]">
          <div className="flex-1">
            <div className="flex flex-col items-center gap-y-small">
              <div className="h-48 w-full animate-pulse rounded bg-slate-300 sm:h-[31.8rem]"></div>
              <span className="h-14 w-1/2  animate-pulse rounded-full bg-slate-300"></span>
              <div className="h-24 w-80 animate-pulse justify-self-center bg-slate-300"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-center gap-y-small">
              <div className="h-48 w-full animate-pulse rounded bg-slate-300 sm:h-[31.8rem]"></div>
              <span className="h-14 w-1/2  animate-pulse rounded-full bg-slate-300"></span>
              <div className="h-24 w-80 animate-pulse justify-self-center bg-slate-300"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-center gap-y-small">
              <div className="h-48 w-full animate-pulse rounded bg-slate-300 sm:h-[31.8rem]"></div>
              <span className="h-14 w-1/2  animate-pulse rounded-full bg-slate-300"></span>
              <div className="h-24 w-80 animate-pulse justify-self-center bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageSkeleton;
