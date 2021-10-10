import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos () {
  return request.get(rootUrl + '/todos')
    .then(res => {
      return res.body.todos
    })
}

export async function addTodo (name) {
  return await request.post(rootUrl + '/todos/')
    .send({ name })
}
