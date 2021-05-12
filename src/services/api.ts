import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://192.168.0.8:8080/',
});

api.interceptors.request.use(async (config: any) => {
  const token = getToken();

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
