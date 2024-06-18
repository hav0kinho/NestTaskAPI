import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './database/prisma.module';
import { PrismaService } from './database/prisma.service';
import { TaskController } from './controllers/task/task.controller';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [],
})
export class AppModule {}
