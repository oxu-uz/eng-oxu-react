import axiosInstance from '../api/axiosInstance';

// Функция для логина, возвращает только токен
export const login = async (identifier, password, registerType) => {
  try {
    const payload =
      registerType === "student"
        ? { phone: identifier, password, register_type: registerType }
        : { login: identifier, password, register_type: registerType };

    const response = await axiosInstance.post('/login', payload);
    return response.data.data.token;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login error");
  }
};

// Registration function for students only
export const register = async (full_name, phone, password) => {
  try {
    const response = await axiosInstance.post('/register', {
      full_name,
      phone,
      password,
    });
    return response.data.data.token;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Registration error");
  }
};
