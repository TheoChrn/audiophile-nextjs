import { apiUrl } from "@/lib/apiurl"

export const getProductsByCategory = async (category: string) => {
  return fetch(`${apiUrl}/categories/${category}`, {
    method: "GET",
    cache:"no-store",
    headers: {
    'Content-Type': 'application/json'
    },
  }
  )
  .then((res) => {
   return res.json()
  })
  .then((result) => {
    return result
  }
  )
  .catch((err) =>  {
    throw new Error('Failed to fetch data')
  })
}

export const getProduct = async (slug: string) => {
  return fetch(`${apiUrl}/products/${slug}`, {
    method: "GET",
    cache:"no-store",
    headers: {
    'Content-Type': 'application/json'
    },
   }
   )
  .then((res) => {
    return res.json()
  })
  .then((result) => {
    return result
  }
  )
  .catch((err) => {
    throw new Error('Failed to fetchData')})
}


