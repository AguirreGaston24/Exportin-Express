import axios from 'axios';

const axiosApi = axios.create({

    baseURL: process.env.API_URL + '/api',
    withCredentials: true,

})

export default axiosApi;