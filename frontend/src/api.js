import axios from 'axios'
import { ACCESS_TOKEN, GOOGLE_ACCESS_TOKEN, REFRESH_TOKEN } from './token';


const apiUrl = import.meta.env.VITE_API_URL


const api = axios.create({
  baseURL:apiUrl ? apiUrl : 'http://localhost:8000'
});


api.interceptors.request.use(
  (config)=>{

    const access_token = localStorage.getItem(ACCESS_TOKEN);
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    const googleAccessToken = localStorage.getItem(GOOGLE_ACCESS_TOKEN);
    if (googleAccessToken) {
      config.headers["X-Google-Access-Token"] = googleAccessToken
    }

    return config

  }, 

  (error)=>{
    return Promise.reject(error);
  }
  
);

export default api