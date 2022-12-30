import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

import Axios from "axios";

Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
Axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
Axios.defaults.headers.common["Content-Type"] = "application/json";

Axios.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: "AUTH_TOKEN",
      Accept: "application/json",
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

createApp(App).use(store).use(router).mount("#app");
