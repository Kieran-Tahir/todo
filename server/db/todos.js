const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos').select()
}

function addTodo (todo, db = connection) {
  // const name = todo
  const newTodo = todo
  console.log('todo db: ', newTodo)
  return db('todos')
    .insert(newTodo)
}

module.exports = {
  getTodos,
  addTodo
}
