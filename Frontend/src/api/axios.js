import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // change if backend URL differs
  withCredentials: true, // important for cookies
});

export default api;
