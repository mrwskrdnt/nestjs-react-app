import { PetKind } from './enum';

export interface PetProps {
  name: string;
  kind: PetKind,
  age: number,
  picUrl: string;
}