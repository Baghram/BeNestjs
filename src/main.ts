require('dotenv').config({path: process.cwd()+'/.env'})
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config({
  path: __dirname + '/.env',
});
const port = process.env.PORT || 3002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
