import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://talksy-server.onrender.com/api',
    withCredentials: true
})