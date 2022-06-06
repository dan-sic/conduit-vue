import { retrieveAuthToken } from "./../lib/auth/index";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((requestConfig) => {
  const authToken = retrieveAuthToken();

  if (!authToken) return requestConfig;

  const headers = {
    ...(requestConfig.headers || {}),
    Authorization: `Token ${authToken}`,
  };

  console.log(headers);
  return { ...requestConfig, headers };
});
