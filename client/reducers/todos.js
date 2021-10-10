import { SET_TODOS, ADD_TODO } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos
    case ADD_TODO:
      return action.todo
    default:
      return state
  }
}

export default reducer
