import qs from "qs"

export default function ({ $axios }) {
  const UUID = Math.random()

  $axios.defaults.headers.common['Accept'] = 'text/plain, */*'
  $axios.defaults.timeout = 30000
  $axios.defaults.baseURL = process.env.BASE_URL


  $axios.defaults.headers['APP-CLIENT-SECURT'] =  'Y2xpZW50OjEyMzQ1Ng=='
  $axios.defaults.headers['deviceId'] = UUID
// 请求拦截
  $axios.onRequest(config => {
    if (process.client) {
      // 默认为from格式
      config.transformRequest = (data, headers) => {
        if (headers['Content-Type'] == 'application/json') {
          return JSON.stringify(data)
        }
        return qs.stringify(data)
      }
      // console.log(config)
    } else {
      // 服务端
      // config.baseURL = process.env.BASE_URL
    }
  })

  $axios.postJson = (url,data,config) => $axios.request({
    url: url,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data:  data,
    ...config
  })

  $axios.postForm = (url,data,config) => $axios.request({
    url: url,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data:  data,
    ...config
  })

  $axios.getJson = (url,data) => $axios.request({
    url: url,
    method: 'get',
    headers: {'Content-Type': 'application/json'},
    params: data
  })

  // 相应拦截---200
  $axios.onResponse(response => {
    // console.log(response)
    return response.data
  })
}
