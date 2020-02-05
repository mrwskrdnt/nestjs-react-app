import { UserRole } from '../../users/enum';

export interface IAuthorizedUserDto {
  id: string,
  username: string,
  roles: UserRole[],
}