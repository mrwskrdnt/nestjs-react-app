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
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.error(exception);

    const httpExtension = exception instanceof HttpException
      ? exception
      : new InternalServerErrorException();

    const statusCode = httpExtension.getStatus();

    let url;

    if (exception instanceof UnauthorizedException) {
      url = format({
        pathname: '/login',
        query: {
          from: request.path,
        }
      });

      response.status(statusCode).redirect(url);
    } else {
      url = format({
        pathname: '/error',
        query: httpExtension.message,
      })
    }

    response
      .status(statusCode)
      .redirect(url);
  }
}