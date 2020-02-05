import { CreatePetDto } from '../../pets/dto/create-pet.dto';
import { UserRole } from '../enum';
import { ICreateUserDto } from './create-user.dto.interface';

export class CreateUserDto implements ICreateUserDto{
  readonly username!: string;
  readonly roles!: UserRole[];
  readonly pets!: CreatePetDto[];
}