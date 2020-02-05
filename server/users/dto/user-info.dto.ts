import { IUserInfoDto } from './user-info.dto.interface';
import { PetsListItemDto } from '../../pets/dto/pets-list-item.dto';

export class UserInfoDto implements IUserInfoDto {
  readonly id!: string;
  readonly username!: string;
  readonly pets!: PetsListItemDto[];
}