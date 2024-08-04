import axios from 'axios';

const axiosApi = axios.create({

    baseURL: "https://nicolas-landing-back.vercel.app/api",
    withCredentials: true,

})

export default axiosApi;