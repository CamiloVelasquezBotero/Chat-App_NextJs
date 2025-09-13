'use server'
import { userRegisterSchema } from '@/src/conexion-prisma/schema-zod'
import { prisma } from '../src/conexion-prisma/prisma'
import bcrypt from 'bcrypt'

export async function createUser(data:unknown) {
    const result = userRegisterSchema.safeParse(data)
    if(!result.success) {
        return {errors: result.error.issues}
    }

    try {
        // Check if user Exists
        const userExists = await prisma.user.findFirst({
            where: {
                email: result.data.email
            }
        })
        if(userExists) {
            return {errors: [{message: 'This Email already exists'}]}
        } 

        // we have to hash the password first before to save it
        const passwordHashed = await bcrypt.hash(result.data.password, 10)

        // Create the new user
        await prisma.user.create({
            data: {
                name: result.data.name,
                email: result.data.email,
                password: passwordHashed,
            }
        })
    } catch (error) {
        console.log('There was an error when try to create the new user', error)
    }
}