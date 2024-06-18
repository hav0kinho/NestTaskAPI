import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTasks() {
    return await this.taskService.getAllTasks();
  }

  @Post()
  async createTask(@Body() { title, description, isDone }) {
    return { title, description, isDone };
  }
}
