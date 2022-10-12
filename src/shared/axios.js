import axios from "axios";

const base = {
  server_https: process.env.REACT_APP_HTTPS_URI,
};

const instance = axios.create({
  baseURL: base.server_https,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const auth = localStorage.getItem("access_token");
    if (auth) config.headers.common["Authorization"] = `Bearer ${auth}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const apis = {};