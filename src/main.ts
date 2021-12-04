import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  initSwagger(app);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const port = 3000;
  await app.listen(port);
  logger.log(`Lares listen in port: ${port}`);
}
bootstrap();
