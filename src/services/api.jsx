import axios from "axios";

const REST_API = import.meta.env.VITE_REST_API;
const api = axios.create({
  baseURL: REST_API,
  withCredentials: true,
});

export default api;
