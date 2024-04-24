import { z } from "zod";

export const evnFileValidationSchema = z.object({
  DB_TYPE: z.string({ required_error: "DB_TYPE is required" }),
  DB_HOST: z.string({
    required_error: "DB_HOST is required",
  }),
  DB_PORT: z.string({
    required_error: "DB_PORT is required",
  }),
  DB_USERNAME: z.string({
    required_error: "DB_HOST is required",
  }),

  DB_PASSWORD: z.string({
    required_error: "DB_PASSWORD is required",
  }),

  DB_DATABASE: z.string({
    required_error: "DB_DATABASE is required",
  }),
});
