import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/ad/getList',
    // url: '/http/getAd',
    method: 'get',
    data,
  })
}
