import request from '@/utils/request'

export const getNewsType = (params) =>
  request({
    url: '/mall-service/userService/newsClass/queryNewsClassByType',
    method: 'get',
    params
  })

  export const getNewsList = (params) =>
  request({
    url: '/mall-service/userService/news/getNewsBySecondClassId',
    method: 'get',
    params
  })


  export const getNewsRelated = (params) =>
  request({
    url: '/mall-service/userService/news/queryRelatedNews',
    method: 'get',
    params
  })

  export const getNewsDetail = (params) =>
  request({
    url: '/mall-service/userService/news/getNewsDetail',
    method: 'get',
    params
  })

  export const insertConsultQuote = (data) =>
  request({
    url: '/mall-service/userService/consultQuote/insertConsultQuote',
    method: 'post',
    data,
    headers:{
      'Content-type': 'multipart/form-data'
    }
  })

