import { z } from "zod";

export const statusEnum = z.enum(["active", "inactive"]);

export const userSchema = z.object({
  id: z.number().optional(),
  username: z.string().min(1, "Username is required").max(255),
  email: z.string().email("Invalid email").max(255),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(255),
  status: statusEnum.default("active"),
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(10, "Invalid phone number").max(15),
  telegram: z.string().max(100).optional(),
});

export type UserFormValues = z.infer<typeof userSchema>;
