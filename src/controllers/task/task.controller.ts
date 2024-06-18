import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UUID } from 'crypto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { UpdatePutTaskDTO } from './dto/update-put-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTasks() {
    return await this.taskService.getAll();
  }

  @Post()
  async createTask(@Body() data: CreateTaskDTO) {
    return this.taskService.create(data);
  }

  @Delete('/:id')
  async deleteTask(@Param('id', ParseUUIDPipe) id: UUID) {
    return await this.taskService.delete(id);
  }

  @Put('/:id')
  async updatePutTask(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() task: UpdateTaskDTO,
  ) {
    return await this.taskService.updatePut(id, task);
  }

  @Patch('/:id')
  async updatePatchTask(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() task: UpdatePutTaskDTO,
  ) {
    return await this.taskService.updatePatch(id, task);
  }
}
