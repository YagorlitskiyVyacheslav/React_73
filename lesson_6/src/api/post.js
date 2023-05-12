import axios from "axios";

const get = () => {
  return axios
    .get("http://localhost:8000/posts")
    .then((response) => response.data);
};

const post = () => {
  return axios
    .get("http://localhost:8000/posts")
    .then((response) => response.data);
};

export const postApi = { get, post };
