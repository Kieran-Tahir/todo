const express = require('express')

const { mongoConnect, cursor } = require('../mongoDB/mongoConnect')

const router = express.Router()

router.get('/', (req, res) => {
  mongoConnect(async () => {
    return await cursor.find().toArray()
  }).then((result) => {
    res.json(result)
    return null
  }).catch(err => {
    console.log(err)
  })
})

// router.post('/', async (req, res) => {
//   const todo = req.body
//   try {
//     await db.addTodo(todo)
//     res.sendStatus(201)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'unable to insert new todo into the database' })
//   }
// })

module.exports = router
