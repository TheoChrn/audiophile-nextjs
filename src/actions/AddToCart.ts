"use server"

import { CartCookie } from "@/types/types";
import { cookies } from "next/headers";

interface ErrorCodeMap {
  [key: string]: string; // Cela dit que chaque clé est une chaîne, mappant à une valeur de chaîne
}


const MAX_QUANTITY = 99;
const MIN_QUANTITY = 1;
const CART_COOKIE_NAME = 'cart';

const cartCookieOptions = { httpOnly: true, path: '/' };
const emptyCartCookieOptions = { ...cartCookieOptions, expires: new Date(0) };

const errorCodes: ErrorCodeMap  = {
  "MAX_QUANTITY_EXCEEDED": "Can't exceed maximum quantity",
  "INVALID_QUANTITY": "Invalid quantity",
  // Ajoutez d'autres codes d'erreur et messages ici
};

// Définition simplifiée de l'interface pour un produit dans le panier

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
    if (newProduct.quantity > 99) throw new Error(errorCodes.MAX_QUANTITY_EXCEEDED)
    if (isNaN(newProduct.quantity)) throw new Error(errorCodes.INVALID_QUANTITY)
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
    const errorMessage = getErrorMessage(error);
    // Retournez ou loguez l'erreur de manière appropriée
    return {success: false, message: errorMessage}
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
      throw new Error(errorCodes.MAX_QUANTITY_EXCEEDED)
     } else {
      existingProduct.quantity = newProduct.quantity
     }
   
  } else {
    if (exceedMaxQuantity) {
      throw new Error(errorCodes.MAX_QUANTITY_EXCEEDED)
    } else {
      existingProduct.quantity += newProduct.quantity
    }

  }
 
  
}

function addNewProduct(cart :CartCookie[], newProduct: CartCookie) {
  if (newProduct.quantity < MIN_QUANTITY || newProduct.quantity > MAX_QUANTITY) {
    throw new Error(errorCodes.INVALID_QUANTITY)
  }
  cart.push(newProduct);
}

function getErrorMessage(error: unknown) {
  const defaultMessage = "An unexpected issue occurred, please try again.";
  if (error instanceof Error) {
    // Utilisez directement error.message comme clé pour chercher dans errorCodes
    const errorCode = error.message;
    // Renvoie le message d'erreur spécifique basé sur errorCode, ou un message par défaut si non trouvé
    return errorCode || defaultMessage;
  }
  return defaultMessage;
}
