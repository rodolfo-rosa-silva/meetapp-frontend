/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const userToken = await localStorage.getItem('@meetapp:user_token');
  if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }
  return config;
});

export default api;
