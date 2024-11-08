import axiosApi from '../config/axios.js';

export const getVideosRequest = () => axiosApi.get('/videos');