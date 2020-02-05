import { ICreatePetDto } from './create-pet.dto.interface';
import { PetKind } from '../enum';

export class CreatePetDto implements ICreatePetDto {
  name!: string;
  kind!: PetKind;
  birthday!: Date;
  picUrl!: string;
}