import { apiUrl } from "./apiurl";

export const deleteCookie = async () => {
   return fetch(
    `${apiUrl}/cart/deleteCart`,
    {
      method: "GET",
      cache: "no-cache",
    }
  )
    .then((res) =>{
      const result = res.json()
      return result
    })
    .catch((err) => new Error('Failed to delete cookie'));
}