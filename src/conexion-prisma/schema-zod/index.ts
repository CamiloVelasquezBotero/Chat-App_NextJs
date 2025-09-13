import { z } from 'zod'

export const userRegisterSchema = z.object({
  name: z.string()
    .trim()
    .min(1, 'The name is obligatory'),
  email: z.string()
    .trim()
    .min(1, 'The Email is obligatory')
    .email('Invalid email format'),
  password: z.string()
    .trim()
    .min(5, 'Minimum 5 characters for the password'),
})

export const userLoginSchema = z.object({
  email: z.string()
    .trim()
    .min(1, 'The Email is obligatory')
    .email('Invalid email format'),
  password: z.string()
    .trim()
    .min(1, 'The password cannot be empty'),
})
