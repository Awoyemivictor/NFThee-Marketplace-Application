import API from "./api";
// const apiBaseUrl = "http://44.198.133.66:3000/";
// const apiBaseUrl = "http://localhost:3001/";
const apiBaseUrl = "http://192.168.0.105:2022/";

export default class BlogService {
  static createBlog(data) {
    // return API.post(`${apiBaseUrl}api/blogs/add`, data); 
    return API.post(`http://192.168.0.105:2022/api/admin/blog`, data);
  } 

  static getBlog(data) {
    return API.get(`${apiBaseUrl}api/admin/blog/fetch`);
  }

  static getBlogById(id) {
    return API.get(`${apiBaseUrl}api/admin/blog/fetch/${id}`);
  }

  static  updateBlog(id, data) {
    return API.put(`${apiBaseUrl}api/admin/blog/fetch/${id}`, data);
  }

  static deleteBlog(id) {
    return API.delete(`${apiBaseUrl}api/admin/blog/fetch/${id}`);
  }
}
