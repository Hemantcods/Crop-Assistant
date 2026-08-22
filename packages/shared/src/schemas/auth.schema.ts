import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(200),
  email: z
    .email("Invalid email Address")
    .transform((value) => value.toLowerCase()),
  phone: z.string().trim().min(10).max(15).optional(),
  password: z
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(100),
  language: z.string().trim().min(2).max(10).default("en"),
});

export const signInSchema = z.object({
  email: z
    .email("Invalid email address")
    .transform((value) => value.toLowerCase()),
  password: z.string().min(1, "Password is required"),
});

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;

export const googleCallbackSchema = z.object({
  code:z.string().min(1,"Google Authorisation code is required")
})
export type GoogleCallbackInput = z.infer<typeof googleCallbackSchema>