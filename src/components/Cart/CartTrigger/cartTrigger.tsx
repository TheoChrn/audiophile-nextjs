import { getProduct } from "@/actions/getProductsFunctions";
import { loadCookie } from "@/actions/handleCookies";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import CartSheet from "../CartSheet/cartSheet";
import { CartCookie } from "@/types/types";

const CartTrigger = async () => {
  const queryClient = new QueryClient();

  queryClient.removeQueries({ queryKey: ["cartCookie"] });

  await queryClient.prefetchQuery({
    queryKey: ["cartCookie"],
    queryFn: () => loadCookie(),
  });

  const cartCookie =
    queryClient.getQueryData<CartCookie[]>(["cartCookie"]) || [];

  if (cartCookie.length > 0) {
    for (const item of cartCookie) {
      await queryClient.prefetchQuery({
        queryKey: ["cartProduct", item.slug],
        queryFn: () => getProduct(item.slug),
      });
    }
  }
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CartSheet cartCookie={cartCookie} />
    </HydrationBoundary>
  );
};

export default CartTrigger;
