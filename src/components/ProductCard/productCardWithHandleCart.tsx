import React from "react";
import ProductCard from "./productCard";
import HandleCartButtons from "../Cart/handleCartButtons/handleCartButtons";
import { Product } from "@/types/types";

const ProductCardWithHandleCart = ({ product }: { product: Product }) => {
  return (
    <ProductCard product={product}>
      <p className="text-h6">$ {product.price.toLocaleString("en-US")}</p>
      <HandleCartButtons product={product} />
    </ProductCard>
  );
};

export default ProductCardWithHandleCart;
