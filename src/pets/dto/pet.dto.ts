import { IPetDto } from '../interfaces/pet.dto.interface';

export class PetDto implements IPetDto {
  readonly name!: string;
  readonly picUrl!: string;
}