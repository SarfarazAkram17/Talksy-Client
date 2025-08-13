import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'talksy-sarfaraz-akram.vercel.app/api',
    withCredentials: true
})