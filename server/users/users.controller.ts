import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { PetsService } from '../pets/pets.service';
import { AuthenticatedGuard } from '../common/guards/authentication/authenticated.guard';
import { Response } from 'express';
import { Roles } from '../common/guards/roles/roles.decorator';
import { UserRole } from './enum';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('/create')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async create(@Body() data: CreateUserDto, @Res() res: Response ) {
    const user = await this.usersService.createUser(data);
    res.status(201).send(user);
  }
}
