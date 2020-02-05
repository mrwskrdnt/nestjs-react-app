import { PetKind } from '../enum';
import { IPetsListItemDto } from './pets-list-item.dto.interface';

export class PetsListItemDto implements IPetsListItemDto {
  readonly id!: string;
  readonly name!: string;
  readonly kind!: PetKind;
}