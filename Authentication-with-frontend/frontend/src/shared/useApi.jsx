import axios from "axios";
import { useAuthContext } from "../context/useAuthContext";

export const useApi = () => {
  const authContext = useAuthContext();

  const api = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
  });

  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${authContext.accessToken}`;
    return config;
  });
  return api;
};
