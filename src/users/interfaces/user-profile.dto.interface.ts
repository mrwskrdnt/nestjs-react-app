import { IPetDto } from '../../pets/interfaces/pet.dto.interface';

export interface IUserProfileDto {
  id: string;
  username: string;
  pet: IPetDto;
}
