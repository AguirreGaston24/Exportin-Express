import axiosApi from '../config/axios.js';

export const insertContactDataRequest = (dataContact) => axiosApi.post('/contact/data', dataContact);


