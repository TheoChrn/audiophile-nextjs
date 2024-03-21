"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Path, useForm } from "react-hook-form";

import { submitOrder } from "@/actions/sendForm";
import { Button } from "@/components/ui/button";
import { OrderSchema } from "@/types/schema";
import { CartProduct, TOrderSchema } from "@/types/types";
import React, { useEffect, useState } from "react";
import FormDialog from "../Dialog/formDialog";
import Summary from "../Summary/summary";

import CashIcon from "@/components/Icons/cashIcon";
import { deleteCookie } from "@/lib/fetch";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import FieldSection from "./fieldSection";
import FormField from "./formField";
import FormFieldTitle from "./formFieldTitle";
import RadioFormField from "./radioFormField";

const billingDetails = [
  {
    name: "name",
    required: true,
    label: "Name",
    type: "text",
    placeholder: "Alexei Ward",
  },
  {
    name: "email",
    required: true,
    label: "Email Address",
    type: "email",
    placeholder: "alexei@mail.com",
  },
  {
    name: "phoneNumber",
    required: true,
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 202-555-0136",
    max: 15,
    min: 3,
  },
];

const shippingInfo = [
  {
    name: "address",
    required: true,
    label: "Your Address",
    type: "text",
    placeholder: "1137 Williams Avenue",
  },
  {
    name: "zipCode",
    required: true,
    label: "ZIP Code",
    type: "text",
    placeholder: "10001",
    max: 5,
  },
  {
    name: "city",
    required: true,
    label: "City",
    type: "text",
    placeholder: "New York",
  },
  {
    name: "country",
    required: true,
    label: "Country",
    type: "text",
    placeholder: "United States",
  },
];

const paymentDetails = [
  {
    label: "Payment Method",
    name: "paymentMethod",
    inputs: [
      {
        name: "paymentMethod.option",
        required: true,
        type: "radio",
        value: "e-Money",
      },
      {
        name: "paymentMethod.option",
        required: true,
        type: "radio",
        value: "Cash on Delivery",
      },
    ],
  },
  {
    name: "paymentMethod.eMoneyNumber",
    required: true,
    label: "e-Money Number",
    type: "number",
    placeholder: "238521993",
    max: 9,
  },
  {
    name: "paymentMethod.eMoneyPIN",
    required: true,
    label: "e-Money PIN",
    type: "number",
    placeholder: "6891",
    max: 4,
  },
];

const OrderForm = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError,
    setValue,
    watch,
    clearErrors,
  } = useForm<TOrderSchema>({
    resolver: zodResolver(OrderSchema),
    mode: "onTouched",
  });

  const router = useRouter();

  const paymentMethod = watch("paymentMethod.option");

  useEffect(() => {
    if (paymentMethod === "Cash on Delivery") {
      clearErrors(["paymentMethod.eMoneyNumber", "paymentMethod.eMoneyPIN"]);
    }
  }, [paymentMethod]);

  const [isOpen, setIsOpen] = useState(false);

  const SHIPPING_PRICE = 50;
  const amount = cartProducts.reduce(
    (sum, { quantity, price }) => sum + quantity * price,
    0
  );
  const grandTotal = amount + SHIPPING_PRICE;

  const preventMoreThanExpected = (e: any, max: number, name: string) => {
    const value = e.target.value;
    if (value.length <= max && /^\d*$/.test(value)) {
      setValue(name as Path<TOrderSchema>, value);
    } else {
      setValue(name as Path<TOrderSchema>, value.slice(0, max));
    }
  };

  const onSubmit = async (data: TOrderSchema) => {
    const formData = { ...data, cartProducts, amount };

    toast.promise(submitOrder(formData), {
      loading: "Submitting...",
      success: async (data) => {
        if (data.success) {
          await deleteCookie();
          alert("The order has been logged in the console");
          setIsOpen(true);
          console.log({
            ...data,
            amount: formData.amount,
            cart: data.data,
          });
          setTimeout(() => {
            redirect("/");
          }, 10000);
          return `Order submitted successfully`;
        } else if (data.errors) {
          const errors: Partial<Record<keyof TOrderSchema, string>> =
            data.errors;
          Object.entries(errors).forEach(([key, value]) => {
            const fieldPath = key as keyof TOrderSchema;
            setError(fieldPath, { message: value });
          });

          throw new Error("Failed to submit order");
        }
      },
      error: "Failed to submit order",
    });
  };

  const getErrorMessage = (fieldName: string) => {
    if (fieldName.includes(".")) {
      const [parentField, childField] = fieldName.split(".");
      const parentError = errors[parentField as keyof TOrderSchema];
      if (typeof parentError === "object") {
        return (parentError as any)[childField]?.message;
      }
    } else {
      return errors[fieldName as keyof TOrderSchema]?.message;
    }

    return undefined;
  };

  return (
    <>
      <Button
        className="absolute -top-20 bg-[none] p-0 capitalize text-black/50 shadow-none hover:text-accent"
        onClick={() => router.back()}
      >
        Go back
      </Button>
      <section className="rounded bg-white px-small py-medium lg:flex-[0_0_70%]">
        <h1 className="text-h1">Checkout</h1>
        <form
          className="mt-medium grid gap-y-medium text-form caret-accent "
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldSection value="Billing Details">
            {billingDetails.map((input, index) => {
              return (
                <FormField
                  register={register}
                  key={index}
                  input={input}
                  errorMessage={getErrorMessage(input.name)}
                  preventMoreThanExpected={preventMoreThanExpected}
                  className="grid flex-[0_0_100%] gap-y-[0.9rem] md:flex-[0_0_calc(50%_-_1.2rem)] "
                />
              );
            })}
          </FieldSection>
          <FieldSection value="Shipping info">
            {shippingInfo.map((input, index) => {
              return (
                <FormField
                  key={index}
                  input={input}
                  errorMessage={getErrorMessage(input.name)}
                  register={register}
                  preventMoreThanExpected={preventMoreThanExpected}
                  className="grid flex-[0_0_100%] gap-y-[0.9rem] first:flex-[0_0_100%] md:flex-[0_0_calc(50%_-_1.2rem)] "
                />
              );
            })}
          </FieldSection>
          <FieldSection value="Payment Details">
            {paymentDetails.map((input) => {
              if (input.inputs) {
                return (
                  <div
                    key={input.name}
                    className="relative flex flex-[0_0_100%] flex-wrap gap-x-small gap-y-[1.6rem] text-form "
                  >
                    <FormFieldTitle
                      className="md:flex-[0_0_calc(50%_-_1.2rem)] lg:flex-col lg:justify-start"
                      label={input.label}
                      errorMessage={errors.paymentMethod?.option?.message}
                    />
                    <div className="flex flex-[0_0_100%] flex-col gap-y-[1.6rem] md:flex-[0_0_calc(50%_-_1.2rem)]">
                      {input.inputs.map((i) => {
                        return (
                          <>
                            <RadioFormField
                              register={register}
                              key={i.value}
                              errorMessage={getErrorMessage(i.name)}
                              className={`flex cursor-pointer flex-row-reverse items-center justify-end gap-x-[1.6rem] rounded border-2 px-small py-[1.8rem] text-subtitle text-input-text outline-accent placeholder:text-subtitle  focus-within:border-accent ${
                                getErrorMessage(i.name)
                                  ? "border-red-600 outline-red-600"
                                  : "border-input outline-accent"
                              }`}
                              setValue={setValue}
                              radioInput={i}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              if (!paymentMethod) return;
              return (
                <React.Fragment key={input.name}>
                  {paymentMethod === "e-Money" && (
                    <FormField
                      input={input}
                      errorMessage={getErrorMessage(input.name)}
                      register={register}
                      preventMoreThanExpected={preventMoreThanExpected}
                      ariaHidden={paymentMethod === "e-Money"}
                      className="grid flex-[0_0_100%] gap-y-[0.9rem] md:flex-[0_0_calc(50%_-_1.2rem)]"
                    />
                  )}
                </React.Fragment>
              );
            })}
            {paymentMethod === "Cash on Delivery" && (
              <div
                aria-hidden={paymentMethod === "Cash on Delivery"}
                className="grid items-center justify-center gap-x-medium gap-y-small sm:grid-cols-[48px,_1fr]"
              >
                <CashIcon />
                <p>
                  {`  The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.`}
                </p>
              </div>
            )}
          </FieldSection>

          <input
            type="hidden"
            aria-hidden={true}
            {...register("cart", { value: cartProducts })}
          />
          <input
            type="hidden"
            aria-hidden={true}
            {...register("amount", { value: grandTotal })}
          />
        </form>
      </section>

      <Summary
        cartProduct={cartProducts}
        amount={amount}
        grandTotal={grandTotal}
      >
        <FormDialog
          onSubmit={handleSubmit(onSubmit)}
          cart={cartProducts}
          grandTotal={grandTotal}
          isOpen={isOpen}
          disabled={Object.keys(errors).length !== 0 ? true : false}
          setIsOpen={setIsOpen}
        />
      </Summary>
    </>
  );
};

export default OrderForm;
