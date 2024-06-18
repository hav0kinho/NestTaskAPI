import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Faz o NestJS utilizar o ValidationPipe, que irá utilizar as validações oque você configurou com o Class Validator nas DTO's
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
