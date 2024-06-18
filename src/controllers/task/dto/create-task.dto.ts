import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  @MinLength(6)
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  isDone: boolean;
}
