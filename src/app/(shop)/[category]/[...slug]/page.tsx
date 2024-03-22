import { getProduct } from "@/actions/getProductsFunctions";
import RenderProductPage from "@/components/ProductPage/RenderProductPage/renderProductPage";
import Wrapper from "@/components/Wrapper/wrapper";
import { Product } from "@/types/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { notFound, redirect } from "next/navigation";

export default async function Product({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug),
  });

  const product = queryClient.getQueryData<Product>(["product", slug]);

  if (!product) {
    notFound();
  }

  if (product.category !== category) {
    redirect(`/${product.category}/${slug}`);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Wrapper className="mb-48 mt-[6.4rem] grid gap-y-[8.8rem] md:gap-y-48 lg:mb-64 lg:gap-y-64">
        <HydrationBoundary state={dehydratedState}>
          <RenderProductPage slug={slug} />
        </HydrationBoundary>
      </Wrapper>
    </>
  );
}
