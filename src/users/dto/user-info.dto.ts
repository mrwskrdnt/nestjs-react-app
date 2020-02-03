import { IUserInfoDto } from '../interfaces/user-info.dto.interface';

export class UserInfoDto implements IUserInfoDto {
  readonly id!: string;
  readonly username!: string;
}