import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://talksy-sarfaraz-akram.vercel.app/api',
    withCredentials: true
})