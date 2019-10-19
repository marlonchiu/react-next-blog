import { axiosInstance } from './config'

// 获取轮播图数据
export const getArticleListRequest = () => {
  return axiosInstance.get('/default/getArticleList')
}
