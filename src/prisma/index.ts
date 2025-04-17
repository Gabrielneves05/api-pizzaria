import { PrismaClient } from '@prisma/client';

// A Vercel cria novas instâncias serverless, então a conexão deve ser reutilizada.
const prismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prismaClient; // Para desenvolvimento, reutiliza a conexão entre requisições
}

export default prismaClient;
