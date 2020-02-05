import { UserRole } from '../enum';

export interface IUserInternalDto {
  id: string;
  username: string;
  password: string;
  roles: UserRole[]
}
