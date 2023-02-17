import axios from "axios";

const instance = axios.create({
    baseURL:"http://192.168.1.48:8004",
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
});

export default instance;
