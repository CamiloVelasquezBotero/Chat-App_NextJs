import { prisma } from "@/src/conexion-prisma/prisma";

// FIND CONTACTS FOR SEARCHING
export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('query')

    if(!query) return Response.json({error: 'Query no encontrada'}, {status: 400})

    try {
        const users = await prisma.user.findMany({
            where: {
                OR: [
                    {email: {contains: query, mode: 'insensitive'}},
                    {name: {contains: query, mode: 'insensitive'}}
                ] 
            }
        })
        return Response.json(users)
    } catch (error) {
        console.log('There was an error finding users... ', error)
    }
    
}