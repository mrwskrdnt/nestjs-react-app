import { PetsListItemDto } from '../../pets/dto/pets-list-item.dto';

export interface IHomePageDto {
  username: string,
  pets: PetsListItemDto[],
}