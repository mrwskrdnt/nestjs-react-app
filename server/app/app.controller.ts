import {
  Req,
  Controller,
  Get,
  Post,
  Res,
  Render,
  UseGuards,
  Param, UseFilters, BadRequestException, Query,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard } from '../common/guards/authentication/authenticated.guard';
import { UsersService } from '../users/users.service';
import { HomePageDto } from './dto/home-page.dto';
import { PetsService } from '../pets/pets.service';
import { AuthorizedUserDto } from '../auth/dto/authorized-user.dto';
import { PetDto } from '../pets/dto/pet.dto';
import { RenderExceptionsFilter } from '../common/exceptions-filers/render-exceptions';
import { LoginPageDto } from './dto/login-page.dto';
import { ErrorPageDto } from './dto/error-page.dto';

@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private readonly petsService: PetsService
  ) {}

  @Get('/login')
  @Render('login')
  @UseFilters(RenderExceptionsFilter)
  getLogin(@Query('from') from?: string): LoginPageDto {
    return { from };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/')
  @Render('home')
  @UseFilters(RenderExceptionsFilter)
  async getUser(@Req() req: Request): Promise<HomePageDto> {
    const { username, id } = req.user as AuthorizedUserDto;
    const pets = await this.petsService.getUsersPets(id);
    return {
      username,
      pets,
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/pets/:id')
  @Render('pet')
  @UseFilters(RenderExceptionsFilter)
  async getPet(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response
  ): Promise<PetDto|void> {
    const { id: userId } = req.user as AuthorizedUserDto;
    const pet = await this.petsService.getUsersPet(id, userId);
    if (pet === null) {
      throw new BadRequestException();
    }
    return pet;
  }

  @Get('/error')
  @Render('error')
  @UseFilters(RenderExceptionsFilter)
  async getErrorPage(@Query() query: ErrorPageDto): Promise<ErrorPageDto> {
    return query;
  }
}
