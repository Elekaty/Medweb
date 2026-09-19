import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a phone number with country code"),
  audience: z.enum(["professional", "facility"]),
  topic: z.string().min(1, "Select a topic"),
  message: z.string().min(10, "Add a little more detail so we can prepare"),
  consent: z
    .boolean()
    .refine((value) => value === true, "Please confirm you understand how licensing and placement support works"),
});

export type ConsultationValues = z.infer<typeof consultationSchema>;

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Use the demo password from the login card"),
  role: z.enum(["candidate", "facility"]),
});

export type LoginValues = z.infer<typeof loginSchema>;
