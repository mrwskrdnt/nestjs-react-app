import { UserRole } from '../enum';
import { ICreatePetDto } from '../../pets/dto/create-pet.dto.interface';

export interface ICreateUserDto {
  username: string,
  roles: UserRole[],
  pets: ICreatePetDto[],
}