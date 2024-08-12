import { useRecoilState } from "recoil";

import { notification } from "antd";
import axios, { Axios } from "axios";
import Router from "next/router";
import { AppConfig } from "src/config/AppConfig";
import { useAlertActions } from "src/_actions";
import { authAtom } from "src/_state";

export { useFetchWrapper };

function useFetchWrapper() {
  const [auth, setAuth] = useRecoilState(authAtom);
  const alterActions = useAlertActions();

  return {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE"),
  };

  function request(method: "GET" | "POST" | "PUT" | "DELETE") {
    return (url: string, data: any = null) => {
      const finalURL = !url.includes("http") ? AppConfig.API_URL + url : url;
      const apiData: any = {
        headers: {
          ...authHeaders(finalURL),
          "Content-Type": "application/json",
        },
      };
      if (data) {
        if (method === "GET") {
          apiData.params = data;
        } else {
          apiData.data = data;
        }
      }

      const axiosInstance = axios.create();

      responseInterceptor(axiosInstance);

      return axiosInstance({ method, url: finalURL, ...apiData });
    };
  }

  function authHeaders(url: string) {
    // return auth header with jwt if user if logged in and request is set to api url
    const token = auth?.token;
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(AppConfig.API_URL);

    if (isLoggedIn && isApiUrl) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  }

  async function handleResponse(response: any): Promise<any> {
    console.log(response);
    const data = response.data;

    if (response.statusText !== "OK") {
      if ([401, 403].includes(response.status) && auth?.token) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        localStorage.removeItem("user");
        // setAuth(null);
        // history.push("/account/login");
      }
    }
  }

  async function responseInterceptor(axiosInstance: Axios) {
    axiosInstance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      async (error: any) => {
        if (
          error.response &&
          error.response.status &&
          error.response.status === 401
        ) {
          if (
            error.response.data.message === "Your token is invalid." ||
            error.response.data.message === "Token Expired"
          ) {
            notification.error({
              key: "session_expired",
              message: "Session expired",
            });
            // userService.logout();
            // Router.push("/logout");
            // setAuth(null);
            Router.push("/");
            return Promise.reject();
          }
        }
        if (
          error.response &&
          error.response.status &&
          error.response.status === 422
        ) {
          return formatFieldError(error);
        }
        return Promise.reject(error);
      }
    );
  }

  function formatFieldError(error: any) {
    const finalError = error.response.data.errors.map((singleError: any) => {
      return {
        name: singleError.param,
        errors: [singleError.message],
      };
    });
    error.response.data.errors = finalError;
    return Promise.reject(error);
  }

  function handleResponse1(response: any): any {
    return response.text().then((text: any) => {
      const data = text;

      if (!response.ok) {
        if ([401, 403].includes(response.status) && auth?.token) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          localStorage.removeItem("user");
          // setAuth(null);
          // history.push("/account/login");
        }
      }

      const error = (data && data.message) || response.statusText;
      alterActions.error(error);
      return Promise.reject(error);
    });
  }
}
