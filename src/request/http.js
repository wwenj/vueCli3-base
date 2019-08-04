import axios from 'axios'
import { stringify } from 'qs' // 引入qs模块，用来序列化post类型的数据
import { Message } from 'element-ui'

// 弹出框报错
let messageErr = function (srt) {
  Message({
    message: srt || '未知错误',
    type: 'error',
    showClose: true,
    duration: 4000
  })
}
axios.defaults.timeout = 10000 // 请求超时设置10s
axios.defaults.withCredentials = false // 表示跨域请求时是否需要使用凭证,默认否
// post请求的时候，我们需要加上一个请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// console.log(window.location)
// console.log(process.env)
// axios.defaults.baseURL = 'https://api.example.com';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  })

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
  if (res.status !== 200) {
    messageErr(`响应错误${res.status}`)
    return res
  }
  if (res.data.errno !== 0) {
    messageErr(`错误响应码：${res.data.errno}-${res.data.errmsg}`)
  }
  return res.data
}, function (error) {
  messageErr(`请求出错${error}`)
  // return Promise.reject(error)
})

function request (options) {
  let tmpGet = {}
  let tmpPost = {}
  if (options.method === 'get') {
    tmpGet = options.params
  } else {
    tmpPost = stringify(options.params)
  }
  return axios.request({
    url: options.url,
    method: options.method,
    data: tmpPost,
    params: tmpGet
  }).then(response => {
    // return (response)
    return Promise.resolve(response)
  }, err => {
    // messageErr(`请求出错${err.messge}`)
    throw err
  }).catch((error) => {
    messageErr('请求失败')
    throw error
  })
}

export default request
