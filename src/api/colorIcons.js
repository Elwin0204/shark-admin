import request from '@/utils/request'

export function getIconList(data) {
  return request({
    url: '/colorIcons/getList',
    method: 'post',
    data,
  })
}
