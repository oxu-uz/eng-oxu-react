import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

axiosInstance.interceptors.request.use(
  config => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser && parsedUser.token) {
          config.headers.Authorization = `Bearer ${parsedUser.token}`;
        }
      } catch (error) {
        console.error("Ошибка при парсинге данных пользователя из localStorage", error);
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
