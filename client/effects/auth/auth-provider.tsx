/** @jsx jsx */
import { jsx } from '@emotion/core';
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
import { AUTH_STORAGE_KEY } from './const';

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

      location.replace('/');
    } catch (e) {
      dispatch({
        type: AuthActionType.LOGIN_ERROR,
        payload: {
          error: e.response.data.message,
        }
      });
    }
  }, []);

  const logout = React.useCallback(async () => {
    dispatch({ type: AuthActionType.LOGIN });
    try {
      await authService.logout();
      dispatch({ type: AuthActionType.LOGOUT_SUCCESS });
      location.replace('/login');
    } catch (e) {
      dispatch({
        type: AuthActionType.LOGOUT_ERROR,
        payload: {
          error: e.response.data.message,
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
    const json = sessionStorage.getItem(AUTH_STORAGE_KEY);

    if (json) {
      dispatch({
        type: AuthActionType.REHYDRATE,
        payload: JSON.parse(json),
      })
    }
  }, []);

  React.useEffect(() => {
    const { userId, username, roles } = state;
    const newState = JSON.stringify({ userId, username, roles });
    const currentState = sessionStorage.getItem(AUTH_STORAGE_KEY);

    if (newState !== currentState) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, newState)
    }
  }, [state]);

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;