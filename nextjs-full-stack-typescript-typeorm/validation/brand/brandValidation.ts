import { z } from "zod";

export const brandValidationSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  status: z.enum(["Active", "Inactive"]).optional(),
});
