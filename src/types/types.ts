import { z } from "zod";
import { ProductSchema, OrderSchema } from "./schema";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

export type Product = z.infer<typeof ProductSchema>

export type TOrderSchema = z.infer<typeof OrderSchema>;

export interface RadioFormFieldProps extends FormFieldProps {
  setValue: UseFormSetValue<TOrderSchema>;
  radioInput: {
    value: string;
    required: boolean;
    type: string;
    name: string;
  };
}

export interface FormFieldProps {
  register: UseFormRegister<TOrderSchema>;
  className: string;
  errorMessage: string | undefined;
  children?: React.ReactNode;
}

export interface TextAndEmailFormInputProps {
  preventMoreThanExpected: (e: any, max: number, name: string) => void;
}

export interface TextAndEmailFormFieldProps extends FormFieldProps {
  input: {
    name: string;
    required: boolean;
    label: string;
    type: string;
    placeholder: string;
    max?: number;
    min?: number;
    value?: string;
  };
  ariaHidden?: boolean;
}


export type CartProduct = {
  id:number,
  name: string,
  price: number,
  image: {mobile: string, tablet:string, desktop: string},
  quantity: number,
  slug:string
}

export type CartCookie = {
  slug:string
  id: number,
  quantity:number
}

export type CartState = {
  cartIsOpen: boolean

}

export type CartActions = {
  toggleCart: () => void
 
}

export type MenuState = {
  menuIsOpen: Boolean
}

export type MenuActions = {
  toggleMenu: () => void
}