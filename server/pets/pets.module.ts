import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './pet.schema';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';


@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'pets', schema: PetSchema }]),
  ],
  providers: [PetsService],
  exports: [PetsService],
  controllers: [PetsController]
})

export class PetsModule {}
