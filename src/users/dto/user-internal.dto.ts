import { IUserInternalDto } from '../interfaces/user-internal.dto.interface';

export class UserInternalDto implements IUserInternalDto {
  readonly id!: string;
  readonly username!: string;
  readonly password!: string;
}