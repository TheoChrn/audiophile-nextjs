import { imageLoader } from "@/lib/utils";
import { CartProduct } from "@/types/types";
import Image from "next/image";
import React from "react";

const CartProductCard = ({
  product,
  children,
  size,
  image,
}: {
  product: CartProduct;
  children: React.ReactNode;
  size?: number;
  image?: string;
}) => {
  return (
    <article className="grid grid-cols-[64px_1fr_1fr] items-center gap-x-[1.6rem] gap-y-small">
      <figure>
        <Image
          src={image || product.image.mobile}
          alt={`Image du produt ${product.name}`}
          width={size || 64}
          height={size || 64}
          className="rounded"
          loader={imageLoader}
        />
      </figure>
      <div className="flex flex-col text-start">
        <h4 className="truncate text-base font-bold">
          {product.name.split(" ").shift()}
        </h4>
        <p className="text-[1.4rem] font-bold text-primary-body">
          $ {product.price.toLocaleString("en-US")}
        </p>
      </div>
      {children}
    </article>
  );
};

export default CartProductCard;
