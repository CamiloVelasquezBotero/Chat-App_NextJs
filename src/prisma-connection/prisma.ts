import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {prisma: PrismaClient}

// Creamos una instancia para no tener que abrirla cada vez que la vamos a llamar
export const prisma = globalForPrisma.prisma || new PrismaClient({log: ['query']})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma