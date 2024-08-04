import axios from 'axios';

const axiosApi = axios.create({

    //baseURL: process.env.API_URL, 
    baseURL: process.env.API_URL,
    withCredentials: true,

})

export default axiosApi;