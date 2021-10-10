const server = require('./server')

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
