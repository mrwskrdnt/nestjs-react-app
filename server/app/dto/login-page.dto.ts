import { ILoginPageDto } from './login-page.dto.interface';

export class LoginPageDto implements ILoginPageDto {
  readonly from?: string;
}