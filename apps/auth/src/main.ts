import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AuthModule } from './auth.module';
import { SharedService } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const configService = app.get(ConfigService);
  const sharedService = app.get(SharedService);

  const queue = configService.get('RABBITMQ_AUTH_QUEUE');

  app.connectMicroservice<MicroserviceOptions>(
    sharedService.getRmqOptions(queue),
  );

  app.startAllMicroservices();
}
bootstrap();
