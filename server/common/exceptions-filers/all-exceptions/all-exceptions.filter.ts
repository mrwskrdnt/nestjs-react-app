import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    console.error(exception);

    const httpExtension = exception instanceof HttpException
      ? exception
      : new InternalServerErrorException();

    response
      .status(httpExtension.getStatus())
      .json(httpExtension.message);
  }
}