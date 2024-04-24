import { z } from "zod";

export const UserValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  username: z
    .string({ required_error: "Name is required" })
    .min(5, { message: "Must be 5 or more characters long" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, { message: "Must be 5 or more characters long" }),
  email: z
    .string({
      required_error: "email is required",
    })
    .email(),

  resetToken: z.string().optional(),
  resetTokenExpire: z.number().optional(),
  role: z.enum(["Admin", "User"]).optional(),
  status: z.boolean().optional(),
});
