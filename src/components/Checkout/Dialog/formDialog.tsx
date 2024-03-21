"use client";

import CartProductCardWithQuantity from "@/components/Cart/CartProductCard/cartProductCardWithQuantity";
import CheckIcon from "@/components/Icons/checkIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LinkButton from "@/components/ui/linkButton";

import { Dispatch, SetStateAction, useState } from "react";
import DialogCartProductWrapper from "./dialogCartProductWrapper";
import { CartProduct } from "@/types/types";

type FormDialogTypes = {
  onSubmit: () => void;
  cart: CartProduct[];
  grandTotal: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
};

const FormDialog = ({
  onSubmit,
  cart,
  grandTotal,
  isOpen,
  setIsOpen,
  disabled,
}: FormDialogTypes) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Dialog defaultOpen={true}>
      <DialogTrigger asChild>
        <Button
          variant={disabled ? "ghost" : "accent"}
          className="w-full"
          aria-disabled={disabled}
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          Continue & pay
        </Button>
      </DialogTrigger>
      {isOpen && (
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className="custom-scrollbar flex h-full max-h-[72rem] max-w-[54rem] flex-col items-start justify-start overflow-y-auto rounded bg-white p-[4.8rem]"
        >
          <DialogHeader className="grid gap-y-small">
            <CheckIcon />
            <DialogTitle className="flex flex-col text-start text-h4 uppercase md:text-h3">
              <span>Thank you</span>
              <span>for your order</span>
            </DialogTitle>
            <DialogDescription className="mt-small text-start text-base">
              You will receive an email confirmation shortly
            </DialogDescription>
          </DialogHeader>
          <div className="mt-[3.7rem] flex w-full flex-col sm:flex-row ">
            <div className="grid size-full items-center  rounded-t bg-[#f0f0f0] p-8 sm:flex-[0_0_60%] sm:rounded-l sm:rounded-r-[inherit] sm:p-small">
              {isExpanded ? (
                <DialogCartProductWrapper cart={cart} />
              ) : (
                <>
                  <CartProductCardWithQuantity product={cart[0]} />
                </>
              )}
              {cart.length > 1 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-[1.6rem] border-t border-black/10 pt-[1.8rem] text-form"
                >
                  {!isExpanded
                    ? `and ${cart.length - 1} more item${
                        !!cart.length ? "s" : ""
                      }`
                    : "View less"}
                </button>
              )}
            </div>
            <div
              className={`flex flex-auto flex-col  justify-end gap-[0.8rem] rounded-b bg-black pb-[1.9rem] pl-medium pt-6 uppercase text-white sm:rounded-l-[inherit] sm:rounded-r sm:pb-[4.1rem] `}
            >
              <span className="text-base font-bold ">Grand total</span>
              <span className={`text-h6`}>
                ${grandTotal.toLocaleString("en-US")}
              </span>
            </div>
          </div>
          <DialogFooter className="mt-[4.4rem] flex w-full">
            <LinkButton
              href="/"
              variant={"accent"}
              customClassName="w-full"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Back to Home
            </LinkButton>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default FormDialog;
