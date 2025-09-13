'use server'
import { userRegisterSchema } from '@/src/conexion-prisma/schema-zod'
import { prisma } from '../src/conexion-prisma/prisma'

export async function createUser(data:unknown) {
    const result = userRegisterSchema.safeParse(data)
    if(!result.success) {
        return {errors: result.error.issues}
    }

    try {
        // we have to hash the password first before to save it
        // Create the new user
        await prisma.User.create({
            data: {
                name: result.data.name,
                email: result.data.email,
                password: result.data.password,
            }
        })
    } catch (error) {
        console.log('There was an error when try to create the new user', error)
    }
}