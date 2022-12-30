import defaultAxiosInstance from "./api/instance";

export const get = (url) => {
  defaultAxiosInstance.get(url).then((res) => res.data);
};

export const post = (url, payload) => {
  defaultAxiosInstance.post(url, payload).then((res) => res.data);
};
