"use server";

import { OrderSchema } from "@/types/schema";
import { TOrderSchema } from "@/types/types";

export const submitOrder = async (data: TOrderSchema) => {
  let zodErrors = {};
  const validation = OrderSchema.safeParse(data);

  if (validation.success) {
    const newCart = validation.data.cart.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });
    return { success: true, data: newCart };
  } else {
    validation.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
    return {
      success: false,
      errors: Object.keys(zodErrors).length > 0 && zodErrors,
    };
  }
};
