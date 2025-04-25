import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // URL of the Flask backend
});

export default axiosInstance;
