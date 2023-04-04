import axios from "axios";
import { API_URL } from "@constants/path";

const instance = axios.create({ baseURL: API_URL });

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance };