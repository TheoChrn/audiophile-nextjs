import React, { useRef, useState } from "react";
import CartProductCard from "./cartProductCard";
import CartQuantitySelector from "../CartQuantitySelector/cartQuantitySelector";
import { ButtonAction } from "../handleCartButtons/handleCartButtons";
import { showToast } from "@/lib/utils";
import { addToCart } from "@/actions/AddToCart";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CartCookie, CartProduct } from "@/types/types";

const CartProductCardWithButtons = ({ product }: { product: CartProduct }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (cartProduct: CartCookie) => {
      return addToCart(cartProduct, true);
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({
          queryKey: ["cartProduct", product.slug],
        });
        showToast("success", data.message);
      }
    },
    onError: (error) => {
      showToast("error", error.message);
    },
  });

  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity);

  const timeoutRef = useRef<number | NodeJS.Timeout | null>(null);

  const handleCartButtons = (action: ButtonAction) => {
    let newQuantity = selectedQuantity;

    switch (action) {
      case "decrease":
        // Logique pour le bouton "decrease"
        newQuantity -= 1;
        setSelectedQuantity((prevState: number) => {
          return prevState <= 0 ? 0 : newQuantity;
        });
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          mutation.mutate({
            id: product.id,
            slug: product.slug,
            quantity: newQuantity,
          });
        }, 500);
        break;

      case "increase":
        // Logique pour le bouton "increase"
        newQuantity += 1;

        setSelectedQuantity((prevState: number) => {
          return prevState >= 99 ? prevState : newQuantity;
        });
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          mutation.mutateAsync({
            id: product.id,
            slug: product.slug,
            quantity: newQuantity,
          });
        }, 500);

        break;

      default:
        console.error(`Action inconnue : ${action}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const prevQuantity = selectedQuantity;
    let quantity = parseInt(e.target.value, 10);
    const newValue = Math.min(Math.max(1, quantity), 99);
    setSelectedQuantity(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      isNaN(newValue)
        ? setSelectedQuantity(prevQuantity)
        : mutation.mutateAsync({
            id: product.id,
            slug: product.slug,
            quantity: newValue,
          });
    }, 1000);
  };
  return (
    <CartProductCard product={product}>
      <CartQuantitySelector
        className={"gap-[1.3rem] justify-self-end px-[1.15rem] py-[0.7rem]"}
        handleQuantity={handleCartButtons}
        handleChange={handleChange}
        selectedQuantity={selectedQuantity}
      />
    </CartProductCard>
  );
};

export default CartProductCardWithButtons;
