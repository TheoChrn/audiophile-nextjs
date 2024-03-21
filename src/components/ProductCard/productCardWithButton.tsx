import { Product } from "@/types/types";
import React from "react";
import ProductCard from "./productCard";
import LinkButton from "../ui/linkButton";

const ProductCardWithButton = ({ product }: { product: Product }) => {
  return (
    <ProductCard
      product={product}
      className={`lg:even:flex-row-reverse lg:odd:flex-row`}
      textAlignment="text-center items-center lg:items-start lg:text-start"
    >
      <LinkButton
        variant="accent"
        customClassName="w-fit"
        href={`/${product.category}/${product.slug}`}
      >
        See product
      </LinkButton>
    </ProductCard>
  );
};

export default ProductCardWithButton;
