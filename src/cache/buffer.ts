import { writeFile } from 'fs'
import { getLastHundredTuples } from '../db/database_operations'
import { SlugTuple } from '../hash/SlugTuple'
import path from 'path'

export async function prepCache() {
	let jsonArr = JSON.stringify(await getLastHundredTuples())
	writeToCache(jsonArr)
}

export function writeToCache(json: string) {
	writeFile('src/cache/cache.json', json, (err) => {
		if (err) {
			throw err
		}
		console.log('Cache Updated')
	})
}

export function readFromCache() {}

export function getSlugTupleFromCache(tuple: SlugTuple) {}
