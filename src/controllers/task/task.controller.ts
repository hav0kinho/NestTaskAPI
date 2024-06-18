import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTasks() {
    return await this.taskService.getAllTasks();
  }

  @Post()
  async createTask(@Body() data: CreateTaskDTO) {
    return this.taskService.createTask(data);
  }
}
