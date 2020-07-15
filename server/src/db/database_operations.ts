import MongoDB = require('mongodb')

import credentials = require('./credentials.json')
import { SlugTuple } from '../hash/SlugTuple'

const uri = `mongodb+srv://${credentials.name}:${credentials.password}@${credentials.server}/${credentials.database}?retryWrites=true&w=majority`

let DB: MongoDB.Db
let collection: MongoDB.Collection

MongoDB.MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log('Connected to DB')
    DB = client.db(credentials.database)
    collection = DB.collection('urlMap')
  })
  .catch((error) => console.error(error))

export function insertLink(tuple: SlugTuple | null): Promise<void> {
  return new Promise((resolve, reject) => {
    let payload = tuple
    if (tuple)
      collection.insertOne(payload, (err) => {
        err ? reject(err) : resolve(console.log('Successful insertion'))
      })
  })
}
