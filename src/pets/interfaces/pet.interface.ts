import { Entity } from '../../db/interfaces/entity.interface';

export interface Pet extends Entity {
  name: string;
  picUrl: string;
}