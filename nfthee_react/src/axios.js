import axios from 'axios';

const instance = axios.create({
  // local
  baseURL: process.env.REACT_APP_BASE_URL+'/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default instance;
