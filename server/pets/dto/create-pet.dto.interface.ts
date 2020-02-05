import { PetKind } from '../enum';

export interface ICreatePetDto {
  name: string,
  kind: PetKind,
  birthday: Date,
  picUrl: string,
}