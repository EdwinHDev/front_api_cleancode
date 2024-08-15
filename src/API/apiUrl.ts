import axios from "axios"
import cookies from 'js-cookie'

const url = process.env.NEXT_PUBLIC_API_URL

export const publicApi = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const privateApi = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
})

privateApi.interceptors.request.use(
  (config) => {
    const token = cookies.get('token')
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)