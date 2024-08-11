import axios from "axios"

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
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)