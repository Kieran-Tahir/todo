import React, { useState } from 'react'
// import store from '../store'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { addTodo } from '../apis/todos'

function AddTodo () {
  const history = useHistory()
  const [name, setName] = useState('')

  async function handleSubmit () {
    const newTodo = name
    try {
      await addTodo(newTodo)
      // store.dispatch({ type: 'ADD_TODO', todo: todo })
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  function handleChange (event) {
    setName(event.target.value)
  }

  return (
    <>
      <div className='bio-box'>
        <span className="bio-header-text"><b>To Do:</b><br></br></span>
        <form onSubmit={(() => handleSubmit())}>
          <div>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="E.g. Finish Trellos..."
            />
          </div>
          <button className="bio-buttons" type='submit'>SAVE</button>
        </form>
      </div>
      <br></br>
      <Link to='/' replace>HOME</Link>

    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(AddTodo)
