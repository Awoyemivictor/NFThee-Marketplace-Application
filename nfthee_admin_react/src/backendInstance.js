import axios from 'axios';

const backendInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + '/',
  // baseURL: process.env.REACT_APP_ADMIN_RENDER_BASE_URL + '/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default backendInstance;
