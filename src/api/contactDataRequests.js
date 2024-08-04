import axiosApi from '../api/axios.js';

export const insertContactDataRequest = (dataContact) => axiosApi.post('/contact/data', dataContact);


