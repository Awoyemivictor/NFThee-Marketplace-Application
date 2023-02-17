import _ from "lodash";

function normalizeResponse(response) {
  return response.json();
}

function httpRequest(method, url, params) {
  const config = {
    method,
    headers: {},
    body: params,
  };

  const checkArray = ['blogs'];
  const token = JSON.parse(localStorage.getItem("token"));

  //intersection function from lodash returns array of common element from two arrays
  //if the url contains - login, resetPassword -> the array with some elements will be returned
  if (!_.intersection(url.split("/"), checkArray).length) {
    config.headers.Authorization = token.authToken;
  }

  return fetch(`${url}`, config)
    .then(normalizeResponse)
    .catch((response) => {
      if (
        response.headers &&
        response.headers.get("Content-Type").indexOf("multipart/form-data") ===
          0
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

