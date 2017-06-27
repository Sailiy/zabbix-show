/**
 * Created by Administrator on 2017/5/26.
 */
import axios from 'axios'
const service = axios.create({
  timeout: 5000                  // 请求超时时间
})

export function getServerUrl () {
  return localStorage.getItem('server_url')
}
export function getAuth () {
  return localStorage.getItem('auth')
}

service.interceptors.request.use(function (config) {
  if (!getServerUrl()) {
    console.log('请配置服务器地址')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default service

