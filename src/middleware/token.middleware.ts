import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenChecker implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const { headers } = req;
      const { token } = headers;
      let authToken: any = token;
      let secret: any = process.env.SECRET.toString();
      if (!token) throw new Error('Token is Required');
      let tokenVerify: any = jwt.verify(authToken, secret);
      if (tokenVerify) {
        req.headers.authenticated = tokenVerify;
        return next();
      }
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Token Verify Failed',
        error: error.message,
      });
    }
  }
}
