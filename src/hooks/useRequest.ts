import { BaseMessage } from "@atoms";
import { EndPoint, privateRoutes } from "@config";
import {
  clearAccessToken,
  clearRefreshToken,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "@helpers";
import { useLoading } from "@hooks/loading";
import axios, { ResponseType } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "./useTranslation";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_BASE_API_URL,
  timeout: 2 * 60 * 1000,
});

let requestInterceptor: number;
let responseInterceptor: number;
let isRefreshing = false;
export const useRequest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showError } = BaseMessage();
  const { t } = useTranslation("error");
  const { setLoading } = useLoading();

  if (!!requestInterceptor || requestInterceptor === 0) {
    instance.interceptors.request.eject(requestInterceptor);
  }

  if (!!responseInterceptor || responseInterceptor === 0) {
    instance.interceptors.response.eject(responseInterceptor);
  }

  requestInterceptor = instance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  responseInterceptor = instance.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    async (error) => {
      setLoading(false);
      if (
        error.response.status === 401 &&
        !isRefreshing &&
        privateRoutes.includes(location.pathname)
      ) {
        isRefreshing = true;
        getNewRefreshToken()
          .then((res) => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
          })
          .catch(() => {
            logout();
          })
          .finally(() => {
            isRefreshing = false;
          });
      } else {
        !isRefreshing && showError(t(error.response?.data.code));
      }
      return Promise.reject(error);
    },
  );

  const logout = () => {
    clearAccessToken();
    clearRefreshToken();
    setTimeout(() => {
      location.pathname !== "/login" && navigate("/login");
    });
  };

  const getNewRefreshToken = async () => {
    const refreshToken = getRefreshToken();
    return axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
      url: import.meta.env.VITE_PUBLIC_BASE_API_URL + EndPoint.REFRESH,
      data: { refreshToken },
    });
  };

  const executeGet = async <T>({
    url,
    params,
    responseType,
    disableLoading = false,
  }: IExecuteWithParams) => {
    !disableLoading && setLoading(true);
    return instance
      .get<T>(url, { params, responseType })
      .then((res) => res.data);
  };

  const executePost = ({
    url,
    data,
    responseType,
    disableLoading = false,
  }: IExecuteWithData) => {
    !disableLoading && setLoading(true);
    return instance({
      method: "POST",
      url,
      data,
      responseType,
    });
  };

  const executePatch = ({
    url,
    data,
    responseType,
    disableLoading = false,
  }: IExecuteWithData) => {
    !disableLoading && setLoading(true);
    return instance({
      method: "PATCH",
      url,
      data,
      responseType,
    });
  };

  const executePut = ({
    url,
    data,
    responseType,
    disableLoading = false,
  }: IExecuteWithData) => {
    !disableLoading && setLoading(true);
    return instance({
      method: "PUT",
      url,
      data,
      responseType,
    });
  };

  const executeDelete = ({
    url,
    params,
    responseType,
    disableLoading = false,
  }: IExecuteWithParams) => {
    !disableLoading && setLoading(true);
    return instance({
      method: "DELETE",
      url,
      params,
      responseType,
    });
  };

  const executePostFile = ({
    url,
    formData,
    config,
    disableLoading = false,
  }: IExecuteWithFormData) => {
    !disableLoading && setLoading(true);
    return instance.post(url, formData, config);
  };

  return {
    executeGet,
    executePost,
    executePatch,
    executePut,
    executeDelete,
    executePostFile,
  };
};

interface IExecuteWithParams {
  url: string;
  params?: any;
  responseType?: ResponseType;
  disableLoading?: boolean;
}

interface IExecuteWithData {
  url: string;
  data?: any;
  responseType?: ResponseType;
  disableLoading?: boolean;
}
interface IExecuteWithFormData {
  url: string;
  formData?: any;
  config?: any;
  disableLoading?: boolean;
}
