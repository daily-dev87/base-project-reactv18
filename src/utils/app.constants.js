import axios from 'axios';
export const DEFAULT_LANG = 'en';

export const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://' : 'https://';
export const API = axios.create({
    baseURL: BASE_URL
});