import { Product } from "@/types/types";
import React, { useState } from "react";
import AddToCartButton from "../AddToCartButton/addToCartButton";
import CartQuantitySelector from "../CartQuantitySelector/cartQuantitySelector";

export type ButtonAction = "decrease" | "increase";

const HandleCartButtons = ({ product }: { product: Product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let quantity = parseInt(e.target.value, 10);
    const newValue = Math.min(Math.max(1, quantity), 99);
    setSelectedQuantity(newValue);
  };

  const handleQuantity = (action: ButtonAction) => {
    switch (action) {
      case "decrease":
        // Logique pour le bouton "decrease"
        setSelectedQuantity((prevState: number) =>
          prevState <= 1 ? 1 : prevState - 1
        );
        break;
      case "increase":
        // Logique pour le bouton "increase"
        setSelectedQuantity((prevState: number) =>
          prevState >= 99 ? prevState : prevState + 1
        );
        break;
      default:
        // Gestion d'une action inconnue (peut-être lancer une erreur)
        console.error(`Action inconnue : ${action}`);
    }
  };

  return (
    <div className="flex flex-wrap gap-[1.6rem]">
      <CartQuantitySelector
        variant={selectedQuantity === 1 ? "ghost" : "select"}
        className="gap-8 p-6"
        selectedQuantity={selectedQuantity}
        handleChange={handleChange}
        handleQuantity={handleQuantity}
      />
      <AddToCartButton selectedQuantity={selectedQuantity} product={product} />
    </div>
  );
};

export default HandleCartButtons;
