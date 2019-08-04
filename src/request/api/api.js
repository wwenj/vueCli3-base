import request from '@/request/http.js'

// 获取列表
export function getFlowList (data) {
  return request({
    url: '/flow/list',
    method: 'post',
    params: data
  })
}
