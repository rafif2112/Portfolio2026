import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  // baseURL: import.meta.env.VITE_API_URL || "https://api-muhamadrafif.vercel.app/api",
});

api.interceptors.request.use((config) => {
  config.withCredentials = true;
  return config;
});

export default api;
