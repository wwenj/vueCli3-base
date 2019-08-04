import request from '@/request/http.js'

// 获取登录者信息
export function getUser (data) {
  return request({
    url: '/login/duser',
    method: 'post',
    params: data
  })
}

// 退出登录
export function toLogout (data) {
  return request({
    url: '/login/logout',
    method: 'post',
    params: data
  })
}

// 跳转去登录
export function toLogin (data) {
  return request({
    url: '/login/login',
    method: 'post',
    params: data
  })
}
