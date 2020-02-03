import { PetDto } from '../../pets/dto/pet.dto';
import { IUserProfileDto } from '../interfaces/user-profile.dto.interface';

export class UserProfileDto implements  IUserProfileDto {
  readonly id!: string;
  readonly username!: string;
  readonly pet!: PetDto;
}