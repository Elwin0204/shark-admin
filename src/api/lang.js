import request from '@/utils/request'
import { baseURLs } from '@/config'

export function langConfig(data) {
  return request({
    baseURL: baseURLs.baidu,
    url: '/lang/langConfig',
    method: 'get',
    params: data,
  })
}

export function langData(data) {
  return request({
    baseURL: baseURLs.google,
    url: '/lang/langData',
    method: 'get',
    params: data,
  })
}
