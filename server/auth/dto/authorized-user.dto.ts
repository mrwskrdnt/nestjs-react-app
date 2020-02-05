import { IAuthorizedUserDto } from './authorized-user.dto.interface';
import { UserRole } from '../../users/enum';

export class AuthorizedUserDto implements IAuthorizedUserDto {
  readonly id!: string;
  readonly username!: string;
  readonly roles!: UserRole[];
}