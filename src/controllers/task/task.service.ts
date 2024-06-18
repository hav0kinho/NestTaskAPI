import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}

  async getAllTasks() {
    return await this.prismaService.task.findMany();
  }

  async createTask(task: CreateTaskDTO) {
    return await this.prismaService.task.create({
      data: task,
    });
  }
}
