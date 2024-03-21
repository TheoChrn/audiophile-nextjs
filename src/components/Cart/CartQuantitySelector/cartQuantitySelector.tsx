import { Button } from "@/components/ui/button";
import React from "react";
import { ButtonAction } from "../handleCartButtons/handleCartButtons";

const CartQuantitySelector = ({
  selectedQuantity,
  handleChange,
  handleQuantity,
  className,
}: {
  selectedQuantity: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleQuantity: (action: ButtonAction) => void;
  className: string;
}) => {
  return (
    <div
      className={`grid grid-cols-[16px_16px_16px] ${className} size-fit bg-card text-base`}
    >
      <Button
        variant={selectedQuantity === 1 ? "ghost" : "select"}
        size={"select"}
        className="w-full text-base"
        onClick={() => handleQuantity("decrease")}
        disabled={
          selectedQuantity === 0 ||
          isNaN(selectedQuantity) ||
          selectedQuantity === undefined ||
          selectedQuantity === null
        }
      >
        -
      </Button>
      <input
        type="number"
        className="border-none bg-transparent text-center"
        value={selectedQuantity}
        onChange={(e) => handleChange(e)}
        maxLength={2}
        minLength={1}
        max={99}
        min={1}
      />
      <Button
        variant={selectedQuantity === 99 ? "ghost" : "select"}
        size={"select"}
        className="w-full text-base"
        onClick={() => handleQuantity("increase")}
        disabled={
          selectedQuantity === 99 ||
          isNaN(selectedQuantity) ||
          selectedQuantity === undefined ||
          selectedQuantity === null
        }
      >
        +
      </Button>
    </div>
  );
};

export default CartQuantitySelector;
