import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './database/prisma.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
