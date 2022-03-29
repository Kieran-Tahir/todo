const express = require('express')

const db = require('../db/todos')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTodos()
    .then(results => {
      res.json({ todos: results.map(todo => todo.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Could not get Todos' })
    })
})

router.post('/', async (req, res) => {
  const todo = req.body
  try {
    await db.addTodo(todo)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert new todo into the database' })
  }
})

module.exports = router
