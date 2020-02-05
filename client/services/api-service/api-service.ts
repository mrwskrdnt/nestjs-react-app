import axios from 'axios';
import { BASE_URL } from './const';

export const apiService = axios.create({
  baseURL: BASE_URL,
});