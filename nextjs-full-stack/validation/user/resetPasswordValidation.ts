import { z } from "zod";

export const resetPasswordValidationSchema = z.object({
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, { message: "Must be 6 or more characters long" }),
});
