import API from "./api";
const apiBaseUrl = "http://44.198.133.66:3000/";
// const apiBaseUrl = "http://localhost:3001/";

export default class BlogService {
  static getBlogs() {
    return API.get(`${apiBaseUrl}blogs`);
  }

  static getBlogByID(id) {
    return API.get(`${apiBaseUrl}blogs/${id}`);
  }
}
