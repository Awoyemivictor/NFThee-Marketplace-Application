import API from './api';
// const apiBaseUrl = "http://44.198.133.66:3000/";
// const apiBaseUrl = "http://localhost:3001/";
const apiBaseUrl = process.env.REACT_APP_BASE_URL + '/';
// const apiBaseUrl = "http://192.168.0.105:2022/";

export default class CreateItemService {
  static createItem(data) {
    // return API.post(`${apiBaseUrl}api/blogs/add`, data);
    return API.get(`http://192.168.0.105:2022/api/nftteam/all`, data);
  }

  static getItem(data) {
    return API.get(`${apiBaseUrl}api/nftteam/all`);
  }

  static getItemById(id) {
    return API.get(`${apiBaseUrl}api/nftteam/all/${id}`);
  }

  static updateBlog(id, data) {
    return API.put(`${apiBaseUrl}api/nftteam/update/${id}`, data);
  }

  static deleteItem(id) {
    return API.delete(`${apiBaseUrl}api/nftteam/delete/${id}`);
  }
}
