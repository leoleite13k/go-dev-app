/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('@GoDev:token');
  config.headers = {
    ...config.headers,
    Authorization: token || '',
  };
  return config;
});

export default api;
