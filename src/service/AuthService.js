
import axios from 'axios';

const AUTH_API = 'http://localhost:8080/api/auth';

export const registerUser = (userData) => {
  return axios.post(`${AUTH_API}/register`, userData);
};
