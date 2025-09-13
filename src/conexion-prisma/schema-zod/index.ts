import { z } from 'zod'

export const userRegisterSchema = z.object({
    name: z.string()
        .min(1, 'The name is obligatory'),
    email: z.string()
        .min(1, 'The Email is obligatory'),
    password: z.string()
        .min(5, 'Minimum 5 characters for the password')
})