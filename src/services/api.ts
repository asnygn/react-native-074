import { axiosBasic, axiosBearer } from './axios'

export const login = async () => {
  const res = await axiosBasic.post('/v1/login')
  return res?.data
}

export const register = async () => {
  const res = await axiosBasic.post('/v1/register')
  return res?.data
}

export const getAllUsers = async () => {
  const res = await axiosBearer.get('/v1/users')
  return res?.data
}

export const getUser = async (id: string) => {
  const res = await axiosBearer.get('/v1/users')
  return res?.data
}
