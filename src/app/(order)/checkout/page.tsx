import { getProduct } from "@/actions/getProductsFunctions";
import { loadCookie } from "@/actions/handleCookies";
import OrderForm from "@/components/Checkout/Form/form";
import Wrapper from "@/components/Wrapper/wrapper";
import LinkButton from "@/components/ui/linkButton";

import { CartCookie, CartProduct, Product } from "@/types/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const Order = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cartCookie"],
    queryFn: () => loadCookie(),
  });

  const cart = queryClient.getQueryData<CartCookie[]>(["cartCookie"]);

  if (!cart || cart.length === 0) {
    return (
      <>
        <main className="">
          <Wrapper className="mb-48 mt-[6.4rem] grid gap-y-[8.8rem] md:gap-y-48 lg:mb-64 lg:gap-y-64">
            <div className="flex min-h-[calc(50svh_-_9rem)] flex-col items-center justify-center gap-medium text-base">
              <h1 className="sr-only text-center text-h1 text-accent">Cart</h1>
              <p className="text-h4 uppercase text-center">
                Your Cart is empty
              </p>
              <LinkButton href="/" variant="accent">
                Return to home
              </LinkButton>
            </div>
          </Wrapper>
        </main>
      </>
    );
  }

  for (const item of cart) {
    await queryClient.prefetchQuery({
      queryKey: ["cartProduct", item.slug],
      queryFn: () => getProduct(item.slug),
    });
  }

  const productsWithQuantities: (CartProduct | null)[] = cart.map(
    (item): CartProduct | null => {
      const productData: Product | undefined =
        queryClient.getQueryData<Product>(["cartProduct", item.slug]);

      if (productData) {
        // Retourne un objet de type CartProduct si productData est défini
        return {
          id: productData.id,
          name: productData.name,
          image: productData.image, // Supposons que c'est une chaîne de caractères
          price: productData.price,
          slug: productData.slug,
          quantity: item.quantity,
        };
      }
      // Retourne null si aucune donnée de produit n'est trouvée
      return null;
    }
  );

  // Utilisez une fonction de garde de type correctement typée dans `filter`
  const filteredProductsWithQuantities: CartProduct[] =
    productsWithQuantities.filter(
      (product): product is CartProduct => product !== null
    );

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="bg-card py-56 ">
      <Wrapper className="relative flex flex-col gap-y-medium lg:flex-row lg:gap-x-12">
        <HydrationBoundary state={dehydratedState}>
          <OrderForm cartProducts={filteredProductsWithQuantities} />
        </HydrationBoundary>
      </Wrapper>
    </main>
  );
};

export default Order;
