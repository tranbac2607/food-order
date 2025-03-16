import axios from 'axios';

import { store } from '@/store/store';
import { hideLoading, showLoading } from '@/store/slice/common-slice';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  config => {
    store.dispatch(showLoading()); // Tăng số lượng API đang chạy
    return config;
  },
  error => {
    store.dispatch(hideLoading()); // Giảm số lượng nếu request lỗi
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    store.dispatch(hideLoading()); // Giảm số lượng khi request hoàn thành
    return response;
  },
  error => {
    store.dispatch(hideLoading()); // Giảm số lượng nếu response lỗi
    return Promise.reject(error);
  }
);

export default axiosInstance;
