import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchTodos } from '../actions'

function todoList (props) {
  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])

  return (
    <>
      <ul>
        {props.todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <Link to='/add' replace>ADD TODO</Link>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(todoList)
