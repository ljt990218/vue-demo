import request from '@/utils/request'

export interface LoginData {
  email: string
  password: string
}

export interface LoginRes {
  token: string
}

export function getCsrf(): Promise<any> {
  return request.get('/csrf-cookie')
}

export function login(data: LoginData): Promise<any> {
  return request.post<LoginRes>('/login', data)
}

export function getUserInfo(): Promise<any> {
  return request.get('/user')
}

export function logout(): Promise<any> {
  return request.post('/logout')
}