import { z } from "zod";

const cleanString = (str: string) => {
  // Remplace tout ce qui n'est pas une lettre, un espace, un trait d'union ou une apostrophe par du vide
  return str.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ'\s-]/g, '');
};


const cleanedStringSchema = z.string().min(1, "Please provide a name").regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s-]+$/, "Invalid caracters").transform(cleanString)


export const cartProductSchema = z.object({
  id: z.number(),
  slug: z.string(),
  quantity: z.number()
})

const ImageSchema = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});

const ItemSchema = z.object({
  quantity: z.number(),
  item: z.string(),
});

export const ProductSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  image: ImageSchema,
  category: z.string(),
  categoryImage: ImageSchema,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(ItemSchema),
  gallery: z.object({
    first: ImageSchema,
    second: ImageSchema,
    third: ImageSchema,
  }),
  others: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      image: ImageSchema,
      category: z.string()
    })
  ),
});

const paymentSchema = z.object({
  option: z.string({invalid_type_error: "Please choose a payment method"}).trim().min(1, "Please choose a payment method"),
  eMoneyNumber: z.string().trim().optional().nullable(),
  eMoneyPIN: z.string().trim().optional().nullable(),
}).superRefine((data, ctx) => {
  if (data.option === "e-Money") {
    if (data.eMoneyNumber == null || !/^\d{9}$/.test(data.eMoneyNumber)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "EMoney Number must be 9 digits",
        path: ['eMoneyNumber'],
      });
    }
    if (data.eMoneyPIN == null || !/^\d{4}$/.test(data.eMoneyPIN)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "EMoney PIN must be 4 digits",
        path: ['eMoneyPIN'],
      });
    }
  }
});



export const OrderSchema = z.object({
  name: cleanedStringSchema,
  email: z.string().trim().min(1, "Please provide your email").email({message: "Email format invalid"}),
  phoneNumber: z.string().trim()
  .min(3, "Please provide your phone number")
  .regex(/^(?!.*[a-zA-Z]).*\+?(\d[\s.-]?)?(\(\d{1,3}\)[\s.-]?)?(\d{1,4}[\s.-]?){1,3}\d{1,4}$/, "Phone number invalid").max(15, "invalid phone number"),
  address: z.string().min(1, "Please provide your adress").trim(),
  zipCode: z.string()
  .trim()
  .min(5, "Please provide your zip code")
  .regex(/^\d+$/, "Zip code must be numeric"),
  city: z.string().min(1, "Please provide your city"),
  country: z.string().min(1, "Please provide your country"),
  paymentMethod: paymentSchema,
  cart: z.array(cartProductSchema).min(1, "Your cart is empty"),
  amount: z.number().nonnegative("total amount cannot be less than 1"),
})