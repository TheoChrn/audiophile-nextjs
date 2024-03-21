import CartProductCardWithQuantity from "@/components/Cart/CartProductCard/cartProductCardWithQuantity";
import { CartProduct } from "@/types/types";

import React from "react";

const DialogCartProductWrapper = ({ cart }: { cart: CartProduct[] }) => {
  return (
    <ul className="custom-scrollbar grid  max-h-[calc(24rem_-_8rem)] gap-y-small overflow-y-auto">
      {cart.map((product) => (
        <li key={product.id}>
          <CartProductCardWithQuantity product={product} />
        </li>
      ))}
    </ul>
  );
};

export default DialogCartProductWrapper;
