import _ from "lodash";
import axios from "axios";

function normalizeResponse(response) {
  return response.data;
}

function httpRequest(method, url, params) {
  const config = {
    method,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(params),
    mode: "cors",
    cache: "default",
  };

  // const checkArray = ["blogs", "login"];
  // const token = localStorage.getItem("token");

  // //intersection function from lodash returns array of common element from two arrays
  // //if the url contains - login, resetPassword -> the array with some elements will be returned
  // if (!_.intersection(url.split("/"), checkArray).length) {
  //   config.headers.Authorization = token;
  // }

  return axios.get(`${url}`, config)
    .then(normalizeResponse)
    .catch((response) => {
      if (
        response.headers
      ) {
        return response.json().then((r) => Promise.reject(r));
      }
      return Promise.reject(response);
    });
}

export default class API {
  static get(url, params) {
    return httpRequest("GET", url, params);
  }

  static put(url, params) {
    return httpRequest("PUT", url, params);
  }

  static post(url, params) {
    return httpRequest("POST", url, params);
  }

  static delete(url, params) {
    return httpRequest("DELETE", url, params);
  }

  static patch(url, params) {
    return httpRequest("PATCH", url, params);
  }
}
