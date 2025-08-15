import axios, { HttpStatusCode } from 'axios';

export function getJson(url: string) {
  return axios.get(url);
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST || '',
  // timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (config) => {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    // const token = getToken()
    // if (token.length) {
    //   config.headers.Authorization = token
    // }
    return config;
  },
  (error) => {
    console.warn(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    const { response, message: msg } = error;
    console.warn(error);

    if (response?.status == HttpStatusCode.Unauthorized) {//登录状态过期, 请重新登录

    } else {
      if (response?.data) {//error
        const { data } = response;
        console.log(data?.msg || data?.message || msg);
      } else {

      }
    }
    return Promise.reject(error);
  },
);

/**
 * 请求端口28081的接口
 */
const http1 = axios.create({
  baseURL: import.meta.env.VITE_API_HOST || '',
  // timeout: 60 * 1000,
  withCredentials: true,
  // headers: {
  //    'authorization-token': token,
  // }
});

http1.interceptors.request.use(
  async (config) => {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    // const token = getToken()
    // if (token.length) {
    //   config.headers.Authorization = token
    // }
    return config;
  },
  (error) => {
    console.warn(error);
    return Promise.reject(error);
  },
);

http1.interceptors.response.use(
  async (response) => {
    const { data } = response;
    if (data && data.code == 10002) {
    }
    return data;
  },
  (error) => {
    const { response, message: msg } = error;
    console.warn(error);

    if (response?.status == HttpStatusCode.Unauthorized) {

    } else {
      if (response?.data) {
        const { data } = response;
        console.log(data?.msg || data?.message || msg);
      } else {
        // error.code !== 'ERR_CANCELED' && message.error(msg);
      }
    }
    return Promise.reject(error);
  },
);

export { instance as default, http1 };

