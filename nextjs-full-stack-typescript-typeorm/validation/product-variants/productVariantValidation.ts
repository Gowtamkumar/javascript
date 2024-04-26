import { z } from "zod";

export const productVariantValidationSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),

  price: z.string({
    required_error: "price is required",
  }),
  product_id: z.string({
    required_error: "product is required",
  }),

  size: z.string({
    required_error: "Size is required",
  }),

  color: z.string({
    required_error: "color is required",
  }),

  qty: z.number({
    required_error: "url Slug is required",
  }),
});
