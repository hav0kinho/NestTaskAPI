import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Responsável por prover o acesso ao Prisma.
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Realiza a conexão quando o módulo é inicializado (A conexão so vai ser desligada por Timeout no Banco)
    await this.$connect();
  }
}
