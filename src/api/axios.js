import axios from 'axios';

const axiosApi = axios.create({

    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    withCredentials: true,

})

export default axiosApi;