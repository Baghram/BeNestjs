import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import {
  MessageResponse,
  ErrorResponse,
  OKResponse,
} from './message.interface';
import { UserService } from './service/user.service';
import { Authenticated } from './middleware/authenticated.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): MessageResponse {
    return {
      message: `User Server Connected on Port ${process.env.PORT}`,
    };
  }
}
