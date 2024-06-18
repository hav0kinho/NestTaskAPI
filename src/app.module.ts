import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './database/prisma.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
