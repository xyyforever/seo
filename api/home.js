import request from '@/utils/request'

export const getList = () =>
  request({
    url: '/mall-service/userService/news/queryIndexPageNews',
    method: 'get',
  })

  export const getRollList = (params) =>
  request({
    url: '/mall-service/userService/consultQuote/queryConsultQuotePage',
    method: 'get',
    params
  })

  export const getBanners = (params) =>
  request({
    url: '/mall-service/userService/standardBanner/getIndexPageBanner',
    method: 'get',
    params
  })

