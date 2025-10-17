'use server'
import { prisma } from "@/src/prisma-connection/prisma";
import { dataSendRequest } from "@/src/schema-zod";
import { useStore } from "@/src/store";

export async function addUser(data:unknown) {
    const result = dataSendRequest.safeParse(data)
    if(!result.success) {
        return {errors: 'There was an error adding the user, please contact support'}
    }

    try {
        const userExists = await prisma.user.findFirst({
            where: { id: result.data.userId },
            select: { id: true, solicitudes: true }
        })
        if(!userExists) {
            return {errors: 'There was an error adding the user, please contact support'}
        }
        const alreadyExists = userExists.solicitudes.includes(result.data.userDataId)
        if(alreadyExists) {
            return {errors: 'The friend request has already been sent'}
        }

        // Adding user
        await prisma.user.update({
            where: {
                id: userExists.id,
            },
            data: {
                solicitudes: {
                    push: result.data.userDataId
                }
            }
        })
    } catch (error) {
        console.log(`There was an error trying to add the user: ${error}`)
    }
}