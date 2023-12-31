import request from '@/utils/request'

export function getOperateLogs(params) {
  return request({
    url: '/logs/operateLogs',
    method: 'get',
    params,
  })
}

export function getLoginLogs(params) {
  return request({
    baseURL: 'http://10.67.216.189:9098',
    url: '/logs/loginLogs',
    method: 'get',
    params,
  })
}
