import { prisma } from '@/src/prisma-connection/prisma';
import jwt from 'jsonwebtoken'

// GET USER REGISTERED
export async function GET(req:Request) {
    const bearer = req.headers.get("authorization");
    if(!bearer || !bearer.startsWith('Bearer')) {
        return Response.json({error: 'Invalid Token'}, {status: 401})
    }

    const token = bearer.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY!)
        if(typeof decoded === 'object' && decoded.id) {
            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id
                },
                select:{
                    name:true,
                    email:true,
                }
            })
            return Response.json(user)
        } else {
            return Response.json({error: 'Invalid Token'}, {status: 401})
        }
    } catch (error) {
        console.log('There was an error validating the Token', error)
        return Response.json({error: 'Invalid Token'}, {status: 401})
    }
}