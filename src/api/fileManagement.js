import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/fileManagement/getList',
    method: 'post',
    data,
  })
}

export function doEdit(data) {
  return request({
    url: '/fileManagement/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/fileManagement/doDelete',
    method: 'post',
    data,
  })
}
