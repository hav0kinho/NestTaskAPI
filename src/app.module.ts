import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './database/prisma.module';
import { PrismaService } from './database/prisma.service';
import { TaskModule } from './controllers/task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
