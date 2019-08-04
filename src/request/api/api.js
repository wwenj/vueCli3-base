import request from '@/request/http.js'

// flow列表
export function getFlowList (data) {
  return request({
    url: '/flow/get-list',
    method: 'post',
    params: data
  })
}
// flow详情
export function getFlowDetail (data) {
  return request({
    url: '/flow/get-detail',
    method: 'post',
    params: data
  })
}
// flow改变状态，启用禁用
export function setFlowStatus (data) {
  return request({
    url: '/flow/set-status',
    method: 'post',
    params: data
  })
}
// flow增加修改
export function setFlowList (data) {
  return request({
    url: '/flow/modify',
    method: 'post',
    params: data
  })
}
// 选择服务下拉列表
export function getListAll (data) {
  return request({
    url: '/service/get-all',
    method: 'post',
    params: data
  })
}
// service列表
export function getServiceList (data) {
  return request({
    url: '/service/get-list',
    method: 'post',
    params: data
  })
}
// service添加修改页
export function setServiceList (data) {
  return request({
    url: '/service/modify',
    method: 'post',
    params: data
  })
}
// 删除service
export function deleServiceList (data) {
  return request({
    url: '/service/delete-service',
    method: 'post',
    params: data
  })
}

// flow列表详情
export function getFlowListDetail (data) {
  return request({
    url: '/flow/flow-data-list',
    method: 'post',
    params: data
  })
}

// flow数据详情
export function getFlowDataDetail (data) {
  return request({
    url: '/flow/flow-data-info',
    method: 'post',
    params: data
  })
}
// 服务调用列表
export function getFlowLogList (data) {
  return request({
    url: '/flow/service-log',
    method: 'post',
    params: data
  })
}
// 日志列表页
export function getOperateLogList (data) {
  return request({
    url: '/operate-log/list',
    method: 'post',
    params: data
  })
}
