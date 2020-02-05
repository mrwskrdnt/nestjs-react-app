import { Entity } from '../db/interfaces/entity.interface';
import { PetKind } from './enum';

export interface Pet extends Entity {
  user: string;
  name: string;
  kind: PetKind
  birthday: Date,
  picUrl: string;
}