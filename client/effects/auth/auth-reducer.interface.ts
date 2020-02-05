import { UserRole } from '../../services/auth-service';
import { AuthActionType } from './enum';

export interface ILoginPayload {
  userId: string,
  username: string,
  roles: UserRole[],
}

export interface IAuthErrorPayload {
  error: string,
}

export interface IRehydrateAction {
  type: AuthActionType.REHYDRATE,
  payload: ILoginPayload,
}

export interface ILoginAction {
  type: AuthActionType.LOGIN,
}

export interface ILoginSuccessAction {
  type: AuthActionType.LOGIN_SUCCESS,
  payload: ILoginPayload,
}

export interface ILoginErrorAction {
  type: AuthActionType.LOGIN_ERROR,
  payload: IAuthErrorPayload,
}

export interface ILogoutAction {
  type: AuthActionType.LOGOUT,

}

export interface ILogoutSuccessAction {
  type: AuthActionType.LOGOUT_SUCCESS,
}

export interface ILogoutErrorAction {
  type: AuthActionType.LOGOUT_ERROR,
  payload: IAuthErrorPayload,
}

export type IAuthAction = IRehydrateAction
  | ILoginAction
  | ILoginSuccessAction
  | ILoginErrorAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutErrorAction;