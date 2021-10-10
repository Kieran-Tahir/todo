import { getTodos } from '../apis/todos'

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'

export function setTodos (todos) {
  return {
    type: SET_TODOS,
    todos
  }
}

export function addTodo (todo) {
  console.log('action dispatched: ', todo)
  return {
    type: ADD_TODO,
    todo
  }
}

export function fetchTodos () {
  return dispatch => {
    return getTodos()
      .then(todos => {
        dispatch(setTodos(todos))
        return null
      })
  }
}
