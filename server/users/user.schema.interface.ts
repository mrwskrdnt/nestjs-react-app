import { Pet } from '../pets/pet.schema.interface';
import { Entity } from '../db/interfaces/entity.interface';
import { UserRole} from './enum';

export interface User extends Entity {
  username: string;
  password: string;
  roles: UserRole[],
  pet: Pet[],
}