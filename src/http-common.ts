import axios from "axios";
const BASE_URL =  "http://localhost:3001/"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export default axiosInstance;
