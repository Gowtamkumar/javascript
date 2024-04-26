import { z } from "zod";

export const forgotPasswordValidationSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .email()
    // .transform((val) => val.split("@")[1]),
});
