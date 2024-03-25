"use client";

import { addToCart } from "@/actions/AddToCart";
import { Button } from "@/components/ui/button";
import { CartCookie, Product } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showToast } from "@/lib/utils";

const AddToCartButton = ({
  selectedQuantity,
  product,
}: {
  selectedQuantity: number;
  product: Product;
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (product: CartCookie) => {
      return addToCart(product, false);
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({
          queryKey: ["cartProduct", product.slug],
        });
        showToast("success", data.message);
      } else {
        showToast("error", data.message);
      }
    },
    onError: (error) => {
      showToast("error", error.message);
    },
  });

  return (
    <Button
      variant={"accent"}
      size={"default"}
      className="text-base"
      onClick={() =>
        mutation.mutate({
          id: product.id,
          slug: product.slug,
          quantity: selectedQuantity,
        })
      }
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
