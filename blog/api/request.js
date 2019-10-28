import { axiosInstance } from './config'

// 获取文章列表数据
export const getArticleListRequest = () => {
  return axiosInstance.get('/default/getArticleList')
}

// 获取文章详情数据
export const getArticleByIdRequest = (id) => {
  return axiosInstance.get(`/default/getArticleById/${id}`)
}
