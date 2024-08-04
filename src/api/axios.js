import axios from 'axios';

const axiosApi = axios.create({

    baseURL: process.env.REACT_APP_API_BASE_URL + '/api',
    withCredentials: true,

})

export default axiosApi;