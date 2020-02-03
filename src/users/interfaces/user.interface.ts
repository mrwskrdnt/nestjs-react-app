import { Pet } from '../../pets/interfaces/pet.interface';
import { Entity } from '../../db/interfaces/entity.interface';
import { UserRole } from '../enums/user-role';

export interface User extends Entity {
  username: string;
  password: string;
  roles: UserRole[],
  pet?: Pet
}