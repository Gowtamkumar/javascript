import { z } from "zod";

export const productValidationSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),

  price: z.string({
    required_error: "price is required",
  }),

  color: z.string({
    required_error: "color is required",
  }),

  urlSlug: z.string({
    required_error: "url Slug is required",
  }),

  imageUrl: z.string({
    required_error: "image Url is required",
  }),

  brandId: z.string().optional(),
  categoryId: z.string().optional(),
  stockQty: z.number({
    required_error: "url Slug is required",
  }),
  description: z.string().optional(),
});
