import axios from "axios";
import { getCookie } from "../utils/cookies";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (req) => {
    const token = getCookie("accessToken");
    if (token) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
  },
  (err) => {
    Promise.reject(err);
  }
);
api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    Promise.reject(err);
  }
);
export default api;
