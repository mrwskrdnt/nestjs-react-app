import { IAuthState } from './auth-context.interface';
import { IAuthAction } from './auth-reducer.interface';
import { AuthActionType } from './enum';

export const authReducer = (state: IAuthState, action: IAuthAction) => {
  switch (action.type) {
    case AuthActionType.REHYDRATE: {
      return {
        ...state,
        isHydrated: true,
        ...action.payload,
      }
    }
    case AuthActionType.LOGIN:
      return {
        ...state,
        isFetching: true,
      };
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.payload
      };
    case AuthActionType.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      };
    case AuthActionType.LOGOUT:
      return {
        ...state,
        isFetching: true,
      };
    case AuthActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userId: null,
        username: '',
        roles: [],
      };
    case AuthActionType.LOGOUT_ERROR:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      };
    default:
      return state;
  }
};