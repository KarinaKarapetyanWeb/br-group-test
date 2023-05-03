import axios, { AxiosError, AxiosInstance } from "axios";
import { BACKEND_URL, REQUEST_TIMEOUT } from "../const";
import { notification } from "antd";

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response) {
        console.log(error.response.data.error);
        notification.open({
          message: "Error",
          description:
            "Sorry, some error have occured. Please refresh the page.",
        });
      }

      throw error;
    }
  );

  return api;
};
