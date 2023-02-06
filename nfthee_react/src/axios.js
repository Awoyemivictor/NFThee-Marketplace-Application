import axios from 'axios';

const instance = axios.create({
  // local
  baseURL: 'http://localhost:8002/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default instance;
