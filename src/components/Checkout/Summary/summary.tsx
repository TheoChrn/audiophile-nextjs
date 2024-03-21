"use client";

import CartProductCardWithQuantity from "@/components/Cart/CartProductCard/cartProductCardWithQuantity";
import { CartProduct } from "@/types/types";
import React from "react";

const Item = ({
  value,
  amount,
  className,
  variant,
}: {
  value: string;
  amount: number;
  className?: string;
  variant?: string;
}) => {
  return (
    <div className={`flex justify-between uppercase ${className}`}>
      <span className="text-base font-bold text-black/50">{value}</span>
      <span className={`text-h6 ${variant}`}>
        ${amount.toLocaleString("en-US")}
      </span>
    </div>
  );
};

const Summary = ({
  cartProduct,
  amount,
  grandTotal,
  children,
}: {
  cartProduct: CartProduct[];
  amount: number;
  grandTotal: number;
  children: React.ReactNode;
}) => {
  return (
    <aside className="sticky top-[2.4rem] grid h-fit gap-y-medium rounded bg-white px-small py-medium text-base  lg:flex-auto">
      <h2 className="text-h6 uppercase">Summary</h2>
      <ul className="custom-scrollbar grid max-h-80 gap-y-small overflow-y-auto">
        {cartProduct.map((product) => (
          <li key={product.id}>
            <CartProductCardWithQuantity product={product} />
          </li>
        ))}
      </ul>
      <div className="grid gap-y-[0.8rem]">
        <Item value="Total" amount={amount} />
        <Item value="Shipping" amount={50} />
        <Item value="vat (included)" amount={Math.floor(amount * 0.2)} />
        <Item
          value="Grand total"
          amount={grandTotal}
          className="mt-[1.6rem]"
          variant={"text-accent"}
        />
      </div>
      {children}
    </aside>
  );
};

export default Summary;
