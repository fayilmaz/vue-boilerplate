import axios from "axios";

const defaultAxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 2500,
  headers: {
    Authorization: "AUTH_TOKEN",
    withCredentials: false, // set to true when auth is configured
  },
  responseEncoding: "utf8",
});

export default defaultAxiosInstance;
