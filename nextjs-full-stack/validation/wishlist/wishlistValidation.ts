import { z } from "zod";

export const WishListhValidationSchema = z.object({
  userId: z.string({
    required_error: "User is required",
  }),
  productId: z.string({
    required_error: "Product is required",
  }),

});
