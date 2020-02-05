import { PetKind } from '../enum';
import { IUserInfoDto } from '../../users/dto/user-info.dto.interface';

export interface IPetDto {
  user: IUserInfoDto
  id: string,
  name: string
  kind: PetKind,
  birthday: Date,
  picUrl: string
}