import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "https://rolebasedauth-wp16.vercel.app/api"
    : "http://localhost:4000/api",
  withCredentials: true,
});

export default api;
