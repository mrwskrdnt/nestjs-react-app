import { useContext } from 'react';
import { AuthContext } from './auth-context';
import { IAuthContext } from './auth-context.interface';

export const useAuth = (): IAuthContext => {
  return useContext(AuthContext);
};