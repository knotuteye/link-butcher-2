import MongoDB = require('mongodb')

const credentials = require('./credentials.json')

const uri = `mongodb+srv://${credentials.name}:${credentials.password}@cluster0.1quzr.mongodb.net/${credentials.database}?retryWrites=true&w=majority`

function DBConnect(): Promise<MongoDB.MongoClient | MongoDB.MongoError> {
  return new Promise((resolve, reject) => {
    new MongoDB.MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).connect((err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
}

module.exports = { DBConnect }
