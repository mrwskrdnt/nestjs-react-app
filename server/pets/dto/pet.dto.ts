import { IPetDto } from './pet.dto.interface';
import { PetKind } from '../enum';
import { UserInfoDto } from '../../users/dto/user-info.dto';

export class PetDto implements IPetDto {
  readonly user!: UserInfoDto;
  readonly id!: string;
  readonly name!: string;
  readonly kind!: PetKind;
  readonly birthday!: Date;
  readonly picUrl!: string;
}