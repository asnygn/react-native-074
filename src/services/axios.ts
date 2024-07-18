import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios'

export const axiosBasic: AxiosInstance = axios.create({
  baseURL: 'http://localhost',
  timeout: 10000,
})

axiosBasic.interceptors.request.use(
  (config): InternalAxiosRequestConfig => {
    config.headers.Accept = 'application/json'
    config.headers['Content-Type'] = 'application/json'
    // config.headers.Authorization = `Basic ${BASIC_TOKEN}`
    return config
  },
  (error) => Promise.reject(error)
)

export const axiosBearer: AxiosInstance = axios.create({
  baseURL: 'http://localhost',
  timeout: 10000,
})

axiosBearer.interceptors.request.use(
  (config): InternalAxiosRequestConfig => {
    config.headers.Accept = 'application/json'
    config.headers['Content-Type'] = 'application/json'
    // config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

axiosBearer.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },
  (error) => Promise.reject(error)
)
