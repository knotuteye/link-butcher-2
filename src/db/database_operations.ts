import MongoDB = require('mongodb')

import credentials = require('./credentials.json')
import { SlugTuple } from '../hash/SlugTuple'

const uri = `mongodb+srv://${credentials.name}:${credentials.password}@${credentials.server}/${credentials.database}?retryWrites=true&w=majority`

let DB: MongoDB.Db
let collection: MongoDB.Collection

MongoDB.MongoClient.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then((client) => {
	console.log('Connected to DB')
	DB = client.db(credentials.database)
	collection = DB.collection('urlMap')
})

export function insertLink(tuple: SlugTuple): Promise<void> {
	return new Promise((resolve, reject) => {
		if (tuple)
			collection.insertOne(tuple, (err) => {
				err ? reject(err) : resolve(console.log('Successful Insertion'))
			})
	})
}

export async function getTupleIfURLAlreadyExists(url: string) {
	let cursor = await collection.find({ url }).limit(1)
	let tuple: SlugTuple = await cursor.next()
	return tuple
}

export async function getTupleIfSlugAlreadyExists(slug: string) {
	let cursor = await collection.find({ slug }).limit(1)
	let tuple: SlugTuple = await cursor.next()
	return tuple
}

export async function getRecentTuples(id: string) {
	let query = id
		? {
				_id: { $lt: new MongoDB.ObjectID(id) },
		  }
		: undefined
	let cursor = await collection.find(query).limit(5).sort({ _id: -1 })
	let results: Array<SlugTuple> = []
	while (await cursor.hasNext()) {
		let elem = await cursor.next()
		results.push(elem)
	}
	return results
}
