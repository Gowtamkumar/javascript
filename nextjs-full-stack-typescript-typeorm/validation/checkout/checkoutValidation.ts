import { z } from "zod";

export const checkoutValidationSchema = z.object({
  firstName: z.string({
    required_error: "firstName is required",
  }),
  lastName: z.string({
    required_error: "firstName is required",
  }),
  paymentMethod: z.enum(["creditCard", "paypal", "cash"]),
  email: z
    .string({
      required_error: "email is required",
    })
    .email(),
  address: z.string({
    required_error: "address is required",
  }),

  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  expirationDate: z.string().optional(),
  cvc: z.string().optional(),
  // .transform((val) => val.split("@")[1]),
});
