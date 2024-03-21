export const deleteCookie = async () => {
   return fetch(
    "http://localhost:3000/api/cart/deleteCart",
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