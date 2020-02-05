import * as React from 'react';
import { authReducer } from './auth-reducer';
import { IAuthState } from './auth-context.interface';
import { IAuthAction } from './auth-reducer.interface'
import {
  authService,
  ILoginData,
} from '../../services/auth-service';
import { AuthActionType } from './enum';
import { AuthContext } from './auth-context';

const AuthProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer<React.Reducer<IAuthState, IAuthAction>>(authReducer,  {
    isHydrated: true,
    isFetching: false,
    userId: null,
    username: '',
    roles: [],
    error: '',
  });

  const login = React.useCallback(async (data: ILoginData) => {
    dispatch({ type: AuthActionType.LOGIN });

    try {
      const response = await authService.login(data);
      const { id: userId, username, roles } = response.data;

      dispatch({
        type: AuthActionType.LOGIN_SUCCESS,
        payload: {
          userId,
          username,
          roles,
        }
      });

      location.assign('/home');
    } catch (e) {
      dispatch({
        type: AuthActionType.LOGIN_ERROR,
        payload: {
          error: e.response.data.error,
        }
      });
    }
  }, []);

  const logout = React.useCallback(async () => {
    dispatch({ type: AuthActionType.LOGIN });
    try {
      await authService.logout();
      dispatch({ type: AuthActionType.LOGOUT_SUCCESS });
      location.assign('/login');
    } catch (e) {
      dispatch({
        type: AuthActionType.LOGOUT_ERROR,
        payload: {
          error: e.response.data.error,
        }
      });
    }
  }, []);

  const context = React.useMemo(() => ({
    state,
    login,
    logout,
  }), [state, login, logout]);

  React.useEffect(() => {
    const storageKey = 'auth';
    const json = sessionStorage.getItem(storageKey);

    if (json) {
      dispatch({
        type: AuthActionType.REHYDRATE,
        payload: JSON.parse(json),
      })
    }

    return () => {
      const { userId, username, roles } = state;
      sessionStorage.setItem(storageKey, JSON.stringify({ userId, username, roles }))
    }
  }, []);

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;