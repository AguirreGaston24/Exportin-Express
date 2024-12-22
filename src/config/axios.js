import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://exportin-express-back.vercel.app',
    withCredentials: true,
});

export default axiosApi;