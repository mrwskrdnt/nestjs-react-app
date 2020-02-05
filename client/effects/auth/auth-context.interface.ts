import { ILoginData, UserRole } from '../../services/auth-service';

export interface IAuthState {
  isHydrated: boolean,
  isFetching: boolean,
  userId: string|null;
  username: string,
  roles: UserRole[]
  error: string,
}

export interface IAuthContext {
  state: IAuthState,
  login: (data: ILoginData) => Promise<void>;
  logout: () => Promise<void>
}