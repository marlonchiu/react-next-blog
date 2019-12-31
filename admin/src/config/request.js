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

// 添加文章
export const addArticleRequest = (data) => {
  return axiosInstance({
    method: 'post',
    url: servicePath.addArticle,
    data,
    withCredentials: true // 前端后端共享 session
  })
}

// 更新文章
export const updateArticleRequest = (data) => {
  return axiosInstance({
    method: 'post',
    url: servicePath.updateArticle,
    data,
    header: { 'Access-Control-Allow-Origin': '*' },
    withCredentials: true // 前端后端共享 session
  })
}

// 获取文章列表
export const getArticleListRequest = () => {
  return axiosInstance({
    method: 'get',
    url: servicePath.getArticleList,
    header: { 'Access-Control-Allow-Origin': '*' },
    withCredentials: true // 前端后端共享 session
  })
}

// 删除文章
export const deleteArticleRequest = (id) => {
  return axiosInstance({
    method: 'get',
    url: servicePath.deleteArticle + id,
    header: { 'Access-Control-Allow-Origin': '*' },
    withCredentials: true // 前端后端共享 session
  })
}

// 根据ID获得文章详情
export const getArticleByIdRequest = (id) => {
  return axiosInstance({
    method: 'get',
    url: servicePath.getArticleById + id,
    header: { 'Access-Control-Allow-Origin': '*' },
    withCredentials: true // 前端后端共享 session
  })
}
