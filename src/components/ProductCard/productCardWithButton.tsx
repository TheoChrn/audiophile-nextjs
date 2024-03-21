import { Product } from "@/types/types";
import React from "react";
import ProductCard from "./productCard";
import LinkButton from "../ui/linkButton";

const ProductCardWithButton = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  return (
    <ProductCard
      product={product}
      className={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
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
