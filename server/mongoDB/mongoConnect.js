const { MongoClient } = require('mongodb')
const uri = process.env.ATLAS_URI

const client = new MongoClient(uri)

const cursor = client.db('demoDB').collection('demoCollection')

async function mongoConnect (callback) {
  try {
    await client.connect()
    return await callback()
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
}

module.exports = {
  mongoConnect,
  cursor
}
