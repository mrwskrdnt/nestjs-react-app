import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../common/guards/authentication/authenticated.guard';
import { Roles } from '../common/guards/roles/roles.decorator';
import { UserRole } from '../users/enum';
import { Response } from 'express';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('/create')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async create(@Body() data: CreatePetDto, @Res() res: Response ) {
    const pet = await this.petsService.createPet(data);
    res.status(201).send(pet);
  }
}
