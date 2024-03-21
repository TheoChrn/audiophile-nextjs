"use server"

import { cookies } from "next/headers";


export const deleteCookie = async () => {
  cookies().set({
    name: 'cart',
    value: '',
    expires: new Date(0),
    path: '/' // Spécifiez le chemin du cookie à supprimer
  });
}

export const loadCookie = () => {
  const cookieStore = cookies();
  const cart = cookieStore.get("cart");


  if (cart) {
    try {
      const parsedCart = JSON.parse(cart.value);
      return parsedCart;
    } catch (error) {
      // Si le cookie existe mais ne peut pas être analysé comme JSON valide, supprimez-le
      deleteCookie(); // Supprimer le cookie
      return null;
    }
  } else {
    return null;
  }
};


