import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginGuard } from '../common/guards/authentication/login.guard';
import { Request, Response } from 'express';
import { AuthorizedUserDto } from './dto/authorized-user.dto';

@Controller('auth')
export class AuthController {
  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Req() req: Request, @Res() res: Response ) {
    res.status(201).send(req.user as AuthorizedUserDto);
  }

  @Get('/logout')
  logout(@Req() req: Request): void {
    req.logout();
  }
}
