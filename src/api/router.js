import request from '@/utils/request'

export function getRouterList(data) {
  return request({
    url: '/menu/navigate',
    method: 'post',
    data,
  })
}

export function getRouteList(data) {
  return request({
    url: '/menu/navList',
    method: 'post',
    data,
  })
}
