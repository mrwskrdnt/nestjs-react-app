import { apiService } from '../api-service';
import { ILoginData, ILoginResult } from './auth-service.interface';
import { AxiosResponse } from 'axios';

const endpoint = '/auth';

const login = (data: ILoginData): Promise<AxiosResponse<ILoginResult>> => {
  return apiService.post(`${endpoint}/login`, data);
};

const logout = (): Promise<AxiosResponse> => {
  return apiService.get(`${endpoint}/logout`);
};

export const authService = {
  login,
  logout,
};