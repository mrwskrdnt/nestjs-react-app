import { IUserInternalDto } from './user-internal.dto.interface';
import { UserRole } from '../enum';

export class UserInternalDto implements IUserInternalDto {
  readonly id!: string;
  readonly username!: string;
  readonly password!: string;
  readonly roles!: UserRole[];
}