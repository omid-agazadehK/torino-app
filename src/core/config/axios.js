import axios from "axios";
import { getCookie, setCookie } from "../utils/cookies";

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
    return Promise.reject(err);
  }
);
api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (err) => {
    const orginalRequest = err.config;
    if ((err.status === 401 || err.status === 403) && !orginalRequest._retry) {
      orginalRequest._retry = true;
      const newAccessToken = await getNewToken();
      if (newAccessToken?.status === 200) {
        setCookie("accessToken", newAccessToken?.data?.accessToken, 30);
        return api(orginalRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(err);
  }
);
export default api;

const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
      refreshToken,
    });
    return response;
  } catch (error) {
    return error;
  }
};
