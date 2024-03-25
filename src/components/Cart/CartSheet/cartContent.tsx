"use client";

import { getProduct } from "@/actions/getProductsFunctions";

import { deleteCookie } from "@/actions/handleCookies";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import LinkButton from "@/components/ui/linkButton";
import { useQueries } from "@tanstack/react-query";
import CartProductCardWithButtons from "../CartProductCard/cartProductCartWithButtons";
import CartProductCardSkeleton from "../CartProductCard/cartProductCardSkeleton";
import { CartCookie } from "@/types/types";

const CartContent = ({ cartCookie }: { cartCookie: CartCookie[] }) => {
  const {
    data: products,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useQueries({
    queries: cartCookie.map((item) => ({
      queryKey: ["cartProduct", item.slug],
      queryFn: () => getProduct(item.slug),
    })),
    combine: (results) => {
      const combinedData = results.map((result, index) => {
        // Assurez-vous que result.data est défini avant de continuer
        if (!result.data) {
          return {
            id: cartCookie[index].id, // Valeur par défaut ou gestion d'une erreur spécifique
            name: "Product Not Found",
            price: 0,
            image: "defaultImage.png", // Une image par défaut si nécessaire
            quantity: cartCookie[index].quantity,
            slug: "",
          };
        }
        return {
          id: result.data.id,
          name: result.data.name,
          price: result.data.price,
          image: result.data.image,
          quantity: cartCookie[index].quantity,
          slug: result.data.slug,
        };
      });
      return {
        data: combinedData,
        isLoading: results.some((result) => result.isLoading),
        isError: results.some((result) => result.isError),
        isPending: results.some((result) => result.isPending),
      };
    },
  });

  if (isProductError) return <p>Failed to retrieve cart</p>;

  const numberOfItems = cartCookie.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );

  const amount = products.reduce(
    (sum, { quantity, price }) => sum + quantity * price,
    0
  );
  return (
    <>
      <DialogHeader className="grid gap-y-medium">
        <div className="flex justify-between">
          {isProductLoading ? (
            <>
              <span className="h-8 w-44 animate-pulse rounded-full  bg-slate-200"></span>
              <div className="h-10 animate-pulse  bg-slate-200"></div>
            </>
          ) : (
            <>
              <DialogHeader className="text-h6">
                Cart ({numberOfItems})
              </DialogHeader>
              <Button
                variant="delete"
                className="p-0 capitalize"
                onClick={() => {
                  deleteCookie();
                }}
              >
                Remove All
              </Button>
            </>
          )}
        </div>
        <ul className="custom-scrollbar grid max-h-[30svh] gap-y-small overflow-y-auto">
          {products.map((product) => {
            if (isProductLoading)
              return (
                <li key={product.id}>
                  <CartProductCardSkeleton />
                </li>
              );
            return (
              <li key={product.id}>
                <CartProductCardWithButtons product={product} />
              </li>
            );
          })}
        </ul>
      </DialogHeader>
      <DialogFooter className="flex flex-col gap-y-small">
        {!isProductLoading ? (
          <span className="flex w-full justify-between text-base uppercase">
            Total{" "}
            <strong className="text-h6 font-bold">
              {" "}
              $ {amount.toLocaleString("en-US")}
            </strong>
          </span>
        ) : (
          <span className="flex w-full justify-between text-base uppercase">
            <span className="h-8 w-44 animate-pulse rounded-full  bg-slate-200"></span>
            <span className="h-8 w-44 animate-pulse rounded-full  bg-slate-200"></span>
          </span>
        )}
        <LinkButton href="/checkout" variant="accent">
          Checkout
        </LinkButton>
      </DialogFooter>
    </>
  );
};

export default CartContent;
