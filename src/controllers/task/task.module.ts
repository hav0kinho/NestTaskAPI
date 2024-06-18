import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/database/prisma.service';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  exports: [],
  imports: [PrismaModule],
  providers: [TaskService],
})
export class TaskModule {}
