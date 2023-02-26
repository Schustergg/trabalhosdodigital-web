import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://localhost:7193/api",
  headers: {
    "Content-type": "application/json",
  },
});


apiClient.interceptors.response.use(
  response => {
    return response 
  },  erro => {
    return erro.response
  });

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;