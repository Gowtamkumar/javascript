import { z } from "zod";

export const addressValidationSchema = z.object({
  user_id: z.string({
    required_error: "user is required",
  }),

  address_line_1: z.string({
    required_error: "address line 1 is required",
  }),

  address_line_2: z.string({
    required_error: "address line 2 is required",
  }),

  state: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),

  zipCode: z.string().optional(),
});
