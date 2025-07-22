
import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const response = await axios.post(
          "http://localhost:8080/api/auth/refresh-token",
          { refreshToken }
        );

        const newToken = response.data.token;
        localStorage.setItem("token", newToken);

        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return instance(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);
        localStorage.clear();
        window.location.href = "/login"; 
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
