const env = require("../env");

let Murl = ''
if(env[process.env.MODE]=='dev'){
    Murl = 'http://121.196.152.62'
}else if(env[process.env.MODE]=='test'){

    Murl = 'http://121.196.152.62'
}else{
    Murl = 'http://121.196.152.62'
}
export default function ({ isServer, req, redirect, route }) {

    let pcOrigin = Murl
    let isMobile = (ua) => {
      return !!ua.match(/AppleWebKit.*Mobile.*/)
    }
    let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
    return isMobile(userAgent) ? '' : redirect(pcOrigin )
    // 使用redirect 重定向到外链需要加上前缀:http / https
}
