import request from '@/utils/request'

export function getOrgList(data) {
  return request({
    url: '/orgManagement/getOrgList',
    method: 'post',
    data,
  })
}

export function getOrgChildrenList(data) {
  return request({
    url: '/orgManagement/getChildrenList',
    method: 'post',
    data,
  })
}

export function doEdit(data) {
  return request({
    url: '/orgManagement/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/orgManagement/doDelete',
    method: 'post',
    data,
  })
}
