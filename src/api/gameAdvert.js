import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/gameAdvert',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/gameAdvert/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/gameAdvert',
    method: 'put',
    data
  })
}
