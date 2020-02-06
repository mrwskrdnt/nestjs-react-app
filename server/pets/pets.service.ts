import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Pet } from './pet.schema.interface';
import { CreatePetDto } from './dto/create-pet.dto';
import { PetDto } from './dto/pet.dto';
import { PetsListItemDto } from './dto/pets-list-item.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel('pets') private readonly petModel: Model<Pet>
  ) { }

  async createPet(data: CreatePetDto) {
    const newPet = new this.petModel(data);
    const result = await this.petModel.create(newPet);
    return result.toObject();
  }

  async getUsersPets(userId: string): Promise<PetsListItemDto[]> {
    const pets = await this.petModel.find({ user: userId })
      .select(['id', 'name', 'kind']);

    return pets.map(p => p.toObject());
  }

  async getUsersPet(id: string, userId: string): Promise<PetDto|null> {
    const pet = await this.petModel.findOne({ _id: id, user: userId })
      .populate('user', ['id', 'username'])
      .select(['id', 'name', 'kind', 'user', 'birthday', 'picUrl']);

    return pet && pet.toObject();
  }
}
