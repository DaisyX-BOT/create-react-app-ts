import axios from 'axios';
import apiConfig from '../api/config'
import { message } from 'antd';

// 超时时间  全局添加
// axios.defaults.timeout = 1000000;
// // 添加axios请求域名
// axios.defaults.baseURL = apiConfig.apiHost;
// 默认带上cookie
// axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加默认配置
axios.create({
  baseURL: apiConfig.apiHost,
  timeout: 60 * 1000
});

axios.interceptors.request.use((config: any) => {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((data: any) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return data;
}, (error: any) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
    let msg = error.message;
    if (error.response) {
      const res = error.response;
      if (res.status === 401) {
        msg = '访问由于凭据无效被拒绝';
      }
      if (res.status === 403) {
        msg = '您没有权限访问';
      }
    }
    message.error(msg);
  return Promise.reject(error);
});


export default axios;
