import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://exportin-express-back.vercel.app'|| 'http://localhost:3000',
    withCredentials: true,
});

export default axiosApi;