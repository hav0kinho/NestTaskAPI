import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TaskController {
  @Get()
  getTasks() {
    return { tasks: [] };
  }
}
