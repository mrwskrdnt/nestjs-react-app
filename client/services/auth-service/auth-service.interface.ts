import { UserRole } from './enum';

export interface ILoginData {
  username: string;
  password: string;
}

export interface ILoginResult {
  id: string;
  username: string;
  roles: UserRole[]
}
