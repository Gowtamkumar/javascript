import { z } from "zod";

export const loginValidationSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .min(5, { message: "Must be 5 or more characters long" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, { message: "Must be 5 or more characters long" }),
});
