
import { CartCookie } from "@/types/types";
import { cookies } from "next/headers"

const setCart = async (cart: CartCookie[]) => {
  cookies().set({name: 'cart', value: JSON.stringify(cart), httpOnly: true, expires: 60*60})
}

export const addProduct = async (newProduct:CartCookie, existingCart?: CartCookie[]) => {
  const newCart = existingCart ?  [...existingCart, newProduct] : [newProduct];
  setCart(newCart)
 }