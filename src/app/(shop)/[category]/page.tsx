import {
  getProduct,
  getProductsByCategory,
} from "@/actions/getProductsFunctions";
import CategoryBanner from "@/components/Category/CategoryBanner/categoryBanner";
import ProductsByCategory from "@/components/Category/ProductCardWrapper/productsByCategory";
import Wrapper from "@/components/Wrapper/wrapper";
import { Product } from "@/types/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { notFound, redirect } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
  });

  const products = queryClient.getQueryData<Product[]>(["products", category]);

  if (!products || products.length === 0) {
    await queryClient.prefetchQuery({
      queryKey: ["product", category],
      queryFn: () => getProduct(category),
    });

    const product = queryClient.getQueryData<Product>(["product", category]);

    if (product) {
      redirect(`${product.category}/${product.slug}`);
    } else {
      notFound();
    }
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <CategoryBanner value={category} />
      <main>
        <Wrapper className="mb-48 mt-[6.4rem] lg:mb-64">
          <HydrationBoundary state={dehydratedState}>
            <ProductsByCategory category={category} />
          </HydrationBoundary>
        </Wrapper>
      </main>
    </>
  );
}
