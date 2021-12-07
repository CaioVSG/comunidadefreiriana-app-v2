import axios from 'axios';

const api = axios.create({
    baseURL: 'http://185.28.23.76/login'
});

export default api;