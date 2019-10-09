import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/games',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/games/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/games',
    method: 'put',
    data
  })
}
