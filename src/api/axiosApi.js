import axios from 'axios';
import { apiURL } from '../constants/constants';

const axiosApi = axios.create({
  baseURL: apiURL,
});

export default axiosApi;
