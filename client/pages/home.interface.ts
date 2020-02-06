import { PetKind } from './enum';

export interface PetsListItemProps {
  id: string,
  name: string,
  kind: PetKind
}

export interface HomeProps {
  username: string;
  pets: PetsListItemProps[],
}