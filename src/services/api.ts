import axios from 'axios';

const token = localStorage.getItem('@GoDev:token');

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: token || '',
  },
});

export default api;
