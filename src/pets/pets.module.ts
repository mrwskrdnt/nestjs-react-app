import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './schemas/pet.schema';


@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'pets', schema: PetSchema }]),
  ],
})

export class PetsModule {}
