import axios from 'axios'
const instance = axios.create({
  // 配置对象 基准路径 头部信息
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
})
// 请求拦截
instance.interceptors.request.use(config => {
  const user = window.sessionStorage.getItem('hm74-toutiao')
  // 给头部加上认证信息
  if (user) {
    config.headers = {
      Authorization: 'Bearer' + JSON.parse(window.sessionStorage.getItem('hm74-toutiao')).token
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
instance.interceptors.response.use(response => response, error => {
  // 做一下事情
  if (error.response.status === 401) {
    // hash 是url后 #开始的字符串
    location.hash = '#/login'
  }
  return Promise.reject(error)
})
export default instance
