import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  UnauthorizedException, InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { format } from 'url';

@Catch()
export class RenderExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

  }
}