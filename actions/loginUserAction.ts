import { prisma } from "@/src/conexion-prisma/prisma";
import { userLoginSchema } from "@/src/conexion-prisma/schema-zod";
import bcrypt from 'bcrypt'

export async function loginUser(data: unknown) {
    const result = userLoginSchema.safeParse(data)
    if (!result.success) {
        return { errors: result.error.issues }
    }

    try {
        // Check if user Exists
        const userExists = await prisma.user.findMany({
            where: {
                email: result.data.email
            }
        })
        console.log(userExists)
    } catch (error) {
        console.log('There was an error when try to log in', error)
    }
}