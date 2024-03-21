export const getProductsByCategory = (category: string) => {
  return fetch(`http://localhost:3000/api/categories/${category}`, {
    method: "GET",
    cache:"no-store"
  }
  )
  .then((res) => {
   return res.json()
  })
  .then((result) => {
    return result
  }
  )
  .catch((err) =>  new Error('Impossible de récupérer les données'))
}

export const getProduct = (slug: string) => {
  return fetch(`http://localhost:3000/api/products/${slug}`, {
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
    throw new Error('Impossible de récupérer les données')})
}


