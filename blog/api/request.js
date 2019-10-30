import { axiosInstance } from './config'
// const prefix = '/default/'

// 获取文章列表数据
export const getArticleListRequest = () => {
  return axiosInstance.get('/default/getArticleList')
}

// 获取文章详情数据
export const getArticleByIdRequest = (id) => {
  return axiosInstance.get(`/default/getArticleById/${id}`)
}

// 获取分析数据
export const getTypeInfoRequest = () => {
  return axiosInstance.get('/default/getTypeInfo')
}

// 根据类别ID获得文章列表
export const getListByTypeId = (id) => {
  return axiosInstance.get(`/default/getListByTypeId/${id}`)
}
