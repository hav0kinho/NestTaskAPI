import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UUID } from 'crypto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { UpdatePutTaskDTO } from './dto/update-put-task.dto';

@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.task.findMany();
  }

  async create(task: CreateTaskDTO) {
    return await this.prismaService.task.create({
      data: task,
    });
  }

  async delete(taskId: UUID) {
    return await this.prismaService.task.delete({
      where: {
        id: taskId,
      },
    });
  }

  async updatePut(taskId: UUID, task: UpdateTaskDTO) {
    await this.verifyIfExists(taskId);

    return await this.prismaService.task.update({
      data: task,
      where: {
        id: taskId,
      },
    });
  }

  async updatePatch(taskId: UUID, task: UpdatePutTaskDTO) {
    await this.verifyIfExists(taskId);

    const newTask = {
      title: task.title ? task.title : '',
      description: task.description ? task.description : '',
      isDone: task.isDone ? task.isDone : false,
    };

    return await this.prismaService.task.update({
      data: newTask,
      where: {
        id: taskId,
      },
    });
  }

  private async verifyIfExists(taskId: UUID) {
    const requiredTask = await this.prismaService.task.findFirst({
      where: {
        id: taskId,
      },
    });

    if (!requiredTask) {
      throw new NotFoundException('task not found');
    }
  }
}
