import type { InternalAxiosRequestConfig } from 'axios'
import axios from "axios"
import { showConfirmDialog, closeToast, showToast } from 'vant'
import router from '@/router'

export const REQUEST_TOKEN_KEY = 'XSRF-TOKEN'
const STORAGE_TOKEN_KEY = 'XSRF-TOKEN'

// 定义 API 响应的接口
interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

// 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 6000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  }
})

// 请求拦截器
function requestHandler(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {

  // console.log(Cookies.get());

  // const savedToken = Cookies.get(STORAGE_TOKEN_KEY)

  // // 如果 token 存在
  // if (savedToken) {
  //   config.headers[REQUEST_TOKEN_KEY] = savedToken
  // }

  return config
}

// 异常拦截处理器
function errorHandler(error: any): Promise<any> {
  console.log('error', error);

  const responseData: ApiResponse<any> = error.response.data
  const { code } = responseData

  // 401 403 未登录 无权限
  if (code === 401 || code === 403) {
    showConfirmDialog({
      title: '暂未登录',
      message: '去登录 体验更多功能',
      confirmButtonText: '去登录',
      cancelButtonText: '先看看',
    })
      .then(() => {
        router.replace('/login')
      })
      .catch(() => {
        // on cancel
        showToast('请求失败')
      })
  }

  return Promise.reject(error)
}

// 响应拦截器
function responseHandler(response: ApiResponse<any>) {
  console.log(response);

  const { code } = response.data
  // 401 403 未登录 无权限
  if (code === 401 || code === 403) {
    showConfirmDialog({
      title: '暂未登录',
      message: '去登录 体验更多功能',
      confirmButtonText: '去登录',
      cancelButtonText: '先看看',
    })
      .then(() => {
        router.replace('/login')
      })
      .catch(() => {
        // on cancel
      })
  }

  return response.data
}

request.interceptors.request.use(requestHandler, errorHandler)

request.interceptors.response.use(response => responseHandler(response as unknown as ApiResponse<any>), errorHandler)

export default request