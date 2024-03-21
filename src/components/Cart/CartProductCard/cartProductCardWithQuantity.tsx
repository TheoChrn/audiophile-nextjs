import React from "react";
import CartProductCard from "./cartProductCard";
import { CartProduct } from "@/types/types";


const CartProductCardWithQuantity = ({ product }: { product: CartProduct }) => {
  return (
    <CartProductCard
      product={product}
      size={50}
      image={`/assets/cart/image-${product.slug}.jpg`}
    >
      <span className="justify-self-end text-base font-bold text-black/50">
        x{product.quantity}
      </span>
    </CartProductCard>
  );
};

export default CartProductCardWithQuantity;
