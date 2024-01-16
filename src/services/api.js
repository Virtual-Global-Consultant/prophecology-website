import axios from 'axios';
import { getLocalToken,infoLogger,errorLogger, clearLocal } from './app';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        'Content-type': 'application/json',
        'Accept':'application/json',
        Authorization: "Bearer " + getLocalToken(),
    }
});

axiosInstance.interceptors.response.use(
    (response) => {
          infoLogger("response", response);
        return response;
    },
    (error) => {
          errorLogger("error", error.response);
        if (error && error.response && error.response.status === 401) {
            if (getLocalToken()) {
                clearLocal()
                localStorage.setItem("to.path", window.location.pathname);
                window.location.replace("/login");
            }
        }
        return Promise.reject(error);
    }
);

const Api = {
    getData: (url, config) =>
        axiosInstance.get(url, config),
    postData: (url, data, config) =>
        axiosInstance.post(url, data, config),
};

export default Api;