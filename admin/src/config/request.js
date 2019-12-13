import { axiosInstance } from './config'
import servicePath from './apiUrl'

// 检查用户名密码是否正确
export const checkLoginRequest = (data) => {
  return axiosInstance({
    method: 'post',
    url: servicePath.checkLogin,
    data,
    withCredentials: true // 前端后端共享 session
  })
}

// 获得文章类别信息
export const getTypeInfoRequest = () => {
  return axiosInstance({
    method: 'get',
    url: servicePath.getTypeInfo,
    header: { 'Access-Control-Allow-Origin': '*' },
    withCredentials: true // 前端后端共享 session
  })
}