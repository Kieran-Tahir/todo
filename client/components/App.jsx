import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

function App () {
  return (
    <>
      <div className='app'>
        <h1>Kierans Todo List</h1>
        <Route exact path='/' component={TodoList} />
        <Route exact path='/add' component={AddTodo} />
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(App)
