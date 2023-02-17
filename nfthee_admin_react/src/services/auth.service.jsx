import API from "./api";
const apiBaseUrl = "http://localhost:2022/";
// const apiBaseUrl = "http://localhost:5000/";

export default class AuthService {
  static login(data) {
    return API.post(`${apiBaseUrl}api/user/login`, data);
  }

  static logout() {
    return API.post(`${apiBaseUrl}logout`);
  }
}

// http://44.198.133.66:8002/api/user/login