"use client";

import { getProductsByCategory } from "@/actions/getProductsFunctions";
import ProductCardWithButton from "@/components/ProductCard/productCardWithButton";
import { Product } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "../../ProductCard/productCardSkeleton";

const ProductCardsWrapper = ({ category }: { category: string }) => {
  const { data, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
    retry: false,
  });

  if (isLoading)
    return (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index}>
            <Skeleton index={index} />
          </li>
        ))}
      </>
    );

  if (isError || !data) throw new Error("Failed to fetch");

  const products = data;

  return (
    <>
      {products.map((product) => (
        <ProductCardWithButton key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductCardsWrapper;
