import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  getHello(): string {
    return this.prismaService.dizOi();
  }
}
