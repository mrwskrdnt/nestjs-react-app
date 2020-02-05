import { PetKind } from './enum';

export interface PetsListItemProps {
  name: string,
  kind: PetKind
}

export interface HomeProps {
  username: string;
  pets: PetsListItemProps[],
}