const env = require("../env");
let Murl = process.env.PC_URL
export default function ({ isServer, req, redirect, route }) {

  let PcOrigin = Murl
  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  return isMobile(userAgent) ? '' : redirect(PcOrigin )
  // 使用redirect 重定向到外链需要加上前缀:http / https
}
