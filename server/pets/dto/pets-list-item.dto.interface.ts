import { PetKind } from '../enum';

export interface IPetsListItemDto {
  id: string,
  name: string
  kind: PetKind,
}