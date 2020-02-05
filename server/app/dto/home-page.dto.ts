import { PetsListItemDto } from '../../pets/dto/pets-list-item.dto';
import { IHomePageDto } from './home-page.dto.interface';

export class HomePageDto implements IHomePageDto {
  readonly username!: string;
  readonly pets!: PetsListItemDto[];
}