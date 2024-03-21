import React from "react";

const CartProductCardSkeleton = () => {
  return (
    <div className="grid animate-pulse grid-cols-[64px_1fr_1fr] items-center gap-x-[1.6rem] gap-y-small">
      <div className="size-[6.4rem] animate-pulse rounded  bg-slate-200"></div>
      <div className="flex flex-col gap-y-2">
        <span className="h-5 animate-pulse  rounded-full bg-slate-200"></span>
        <span className="h-5 animate-pulse rounded-full  bg-slate-200"></span>
      </div>
      <div className="h-10 animate-pulse  bg-slate-200"></div>
    </div>
  );
};

export default CartProductCardSkeleton;
