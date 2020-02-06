import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  InternalServerErrorException, UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { format } from "url";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException|Error, host: ArgumentsHost) {
    console.error(exception);

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const contentType = request.header('Content-Type');

    const httpExtension = exception instanceof HttpException
      ? exception
      : new InternalServerErrorException();

    if (contentType && contentType.includes('application/json')) {
      this.handleApiException(httpExtension, ctx)
    } else {
      this.handleRenderException(httpExtension, ctx)
    }
  }

  handleApiException(httpExtension: HttpException, ctx: HttpArgumentsHost) {
    const response = ctx.getResponse<Response>();

    response
      .status(httpExtension.getStatus())
      .json(httpExtension.getResponse());
  }

  handleRenderException(httpException: HttpException, ctx: HttpArgumentsHost) {
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let url;

    if (httpException instanceof UnauthorizedException) {
      url = format({
        pathname: '/login',
        query: {
          from: request.path,
        }
      });
    } else {
      url = format({
        pathname: '/error',
        query: httpException.message,
      })
    }

    response
      .status(httpException.getStatus())
      .redirect(url);
  }
}