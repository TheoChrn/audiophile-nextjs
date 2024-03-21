"use client";

import useFindDevice from "@/hooks/useFindDevice";

import { getProduct } from "@/actions/getProductsFunctions";
import ProductCardWithHandleCart from "@/components/ProductCard/productCardWithHandleCart";
import { Product } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import OtherProducts from "../OtherProducts/otherProducts";
import ProductDetails from "../ProductDetails/productDetails";
import ProductGallery from "../ProductGallery/productGallery";
import ProductPageSkeleton from "../Skeleton/productPageSkeleton";

const RenderProductPage = ({ slug }: { slug: string }) => {
  const device = useFindDevice();

  const { data, isLoading, isError } = useQuery<Product, Error>({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug),
  });

  if (isLoading) return <ProductPageSkeleton />;

  if (isError || !data) throw new Error("Failed to fetch");

  const product = data;

  return (
    <>
      <section>
        <ProductCardWithHandleCart product={product} />
      </section>
      <ProductDetails product={product} />
      <ProductGallery product={product} device={device} />
      <OtherProducts othersProducts={product.others} device={device} />
    </>
  );
};

export default RenderProductPage;
