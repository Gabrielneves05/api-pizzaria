"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// A Vercel cria novas instâncias serverless, então a conexão deve ser reutilizada.
const prismaClient = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prismaClient; // Para desenvolvimento, reutiliza a conexão entre requisições
}
exports.default = prismaClient;
