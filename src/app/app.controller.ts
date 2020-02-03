import { Req, Controller, Get, Post, Res, Render, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginGuard } from '../common/guards/authentication/login.guard';
import { AuthenticatedGuard } from '../common/guards/authentication/authenticated.guard';
import { UserInfoDto } from '../users/dto/user-info.dto';
import { AuthorizedUser } from '../auth/interfaces/authorized-user.interface';
import { UserProfileDto } from '../users/dto/user-profile.dto';
import { UsersService } from '../users/users.service';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @Render('login')
  getLogin() {
    return;
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Req() req: Request, @Res() res: Response ) {
    res.status(201).send(req.user as AuthorizedUser);
  }


  @Get('/logout')
  logout(@Req() req: Request, @Res() res: Response): void {
    req.logout();
    res.redirect('/');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  getUser(@Req() req: Request): Promise<UserInfoDto> {
    return this.usersService.getUser((req.user as AuthorizedUser).id);
  }


  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Req() req: Request): Promise<UserProfileDto> {
    return this.usersService.getProfile((req.user as AuthorizedUser).id);
  }
}
