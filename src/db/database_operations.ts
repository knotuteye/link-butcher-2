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

export function insertLink(tuple: SlugTuple): Promise<void> {
  return new Promise((resolve, reject) => {
    if (tuple)
      collection.insertOne(tuple, (err) => {
        err ? reject(err) : resolve(console.log('Successful Insertion'))
      })
  })
}

export function getTupleIfURLAlreadyExists(url: string): Promise<SlugTuple> {
  return new Promise((resolve, reject) => {
    collection
      .findOne({ url: url })
      .then((result) => {
        resolve(result)
      })
      .catch((err) => reject(err))
  })
}

export async function slugAlreadyExists(tuple: SlugTuple | null) {
  let results = await collection.findOne({ slug: tuple?.slug })
  return results ? true : false
}

export async function getURLOfExistingSlugTuple(slug: string) {
  let skyTuple = await collection.findOne({ slug: slug })
  return skyTuple?.url || null
}

export async function getRecentTuples() {
  let cursor = await collection.find().limit(6).sort({ _id: -1 })
  let results: Array<SlugTuple> = []
  while (await cursor.hasNext()) {
    let elem = await cursor.next()
    delete elem._id
    results.push(elem)
  }
  return results
}
