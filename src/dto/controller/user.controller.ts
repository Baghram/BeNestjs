import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import { Request, Response } from 'express';
import {
  MessageResponse,
  ErrorResponse,
  OKResponse,
  AddBalanceResponse,
} from 'src/message.interface';
import { User } from 'src/interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  connected(): any {
    return {
      message: 'Balance Connected',
    };
  }
  @Post('/balance')
  @HttpCode(200)
  async Balance(@Req() req: Request): Promise<AddBalanceResponse | ErrorResponse> {
    try {
      const { headers, body } = req;
      const { authenticated }: any = headers;
      let data: any = await this.userService.addBalances(
        authenticated._id,
        body.balance,
      );
      if(data.error) throw new Error(data.error)
      return {
        message: 'Add Balance Success',
        data: {
          email: data.email,
          balance: data.balance,
        },
      };
    } catch (error) {
      return {
        message: 'Add Balance Failed',
        error: error.message,
      };
    }
  }
}
