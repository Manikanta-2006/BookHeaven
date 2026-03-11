import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
console.log('API Base URL:', baseURL);

const api = axios.create({
    baseURL,
    timeout: 15000,
});

export default api;
