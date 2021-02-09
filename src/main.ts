import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strip down the properties that are not included in the DTO throught the validation
      forbidNonWhitelisted: true, // will error if there is an additional property that is not expected
      transform: true, // tries to transform the API input to match the desired type (typeof id)
    }),
  );

  await app.listen(3000);
}
bootstrap();
