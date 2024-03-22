"use server"

import { CartCookie } from "@/types/types";
import { cookies } from "next/headers";

const MAX_QUANTITY = 99;
const MIN_QUANTITY = 1;
const CART_COOKIE_NAME = 'cart';

const cartCookieOptions = { httpOnly: true, path: '/' };
const emptyCartCookieOptions = { ...cartCookieOptions, expires: new Date(0) };

// Définition simplifiée de l'interface pour un produit dans le panier
interface CartProduct {
  id: string;
  quantity: number;
}

async function setCart(cart: CartCookie[]) {
  if (cart.length === 0) {
    cookies().set({ name: CART_COOKIE_NAME, value: '', ...emptyCartCookieOptions });

    return {message: "Cart emptied"}
  } else {
    cookies().set({ name: CART_COOKIE_NAME, value: JSON.stringify(cart), ...cartCookieOptions });

    return {message: "Cart updated"}
  }
}

export async function addToCart(newProduct: CartCookie, isFromCart: boolean) {
  try {
    if (newProduct.quantity > 99) throw new Error("Can't exceed maximum quantity")
    if (isNaN(newProduct.quantity)) throw new Error("Invalid quantity")
    const cartCookie = cookies().get(CART_COOKIE_NAME);
    const cart: CartCookie[] = cartCookie ? JSON.parse(cartCookie.value) : [];
    const existingProductIndex = cart.findIndex(product => product.id === newProduct.id);

    if (existingProductIndex !== -1) {
      updateExistingProduct(cart, existingProductIndex, newProduct, isFromCart);
     
    } else {
      addNewProduct(cart, newProduct);
    }

    const res = await setCart(cart);
    return { success: true, message: res.message};
  } catch (error) {
    throw new Error(getErrorMessage(error)) 
  }
}

function updateExistingProduct(cart: CartCookie[], index: number, newProduct: CartCookie, isFromCart:boolean) {
  const existingProduct = cart[index];
  const newQuantity = existingProduct.quantity + newProduct.quantity;
  const selectedMoreThanMaxQuantity = newProduct.quantity > MAX_QUANTITY
  const exceedMaxQuantity = newQuantity > MAX_QUANTITY 


  if (isFromCart && newProduct.quantity === 0) {
    cart.splice(index, 1);
  } else if (isFromCart) {
    if (selectedMoreThanMaxQuantity) {
      throw new Error("Can't exceed maximum quantity")
     } else {
      existingProduct.quantity = newProduct.quantity
     }
   
  } else {
    if (exceedMaxQuantity) {
     throw new Error("Can't exceed maximum quantity")
    } else {
      existingProduct.quantity += newProduct.quantity
    }

  }
 
  
}

function addNewProduct(cart :CartCookie[], newProduct: CartCookie) {
  if (newProduct.quantity < MIN_QUANTITY || newProduct.quantity > MAX_QUANTITY) {
    throw new Error('Invalid quantity');
  }
  cart.push(newProduct);
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An unknown error occurred";
}
