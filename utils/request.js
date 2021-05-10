import axios from 'axios'
import { Toast } from 'vant'
// import { UserModule } from '@/store/modules/user'
// import router from '@/router/router'
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 180000
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    // if (UserModule.token) {
    //   config.headers.token = UserModule.token
    // }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      Toast.fail({
        message: res.message || res.msg || 'Error',
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response.data
    }
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误(400)'; break
        case 401: error.message = '未授权,请登录(401)'; break
        case 403: error.message = '拒绝访问(403)'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 405: error.message = '请求方法未允许(405)'; break
        case 408: error.message = '请求超时(408)'; break
        case 500: error.message = '服务器内部错误(500)'; break
        case 501: error.message = '服务未实现(501)'; break
        case 502: error.message = '网络错误(502)'; break
        case 503: error.message = '服务不可用(503)'; break
        case 504: error.message = '网络超时(504)'; break
        case 505: error.message = 'HTTP版本不受支持(505)'; break
        default: error.message = `连接错误: ${error.message}`
      }
    } else {
      error.message = '连接到服务器失败，请联系管理员'
    }
    Toast.fail({
      message: error.message,
    })
    return Promise.reject(error)
  }
)

export default service
