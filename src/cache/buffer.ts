import { writeFile } from 'fs'
import { getLastHundredTuples } from '../db/database_operations'
import { SlugTuple } from '../hash/SlugTuple'

export async function prepCache() {
	let jsonArr = JSON.stringify(await getLastHundredTuples())
	writeToCache(jsonArr)
}

export function writeToCache(json: string) {
	writeFile('cache.json', json, () => {
		console.log('Cache Updated')
	})
}

export function readFromCache() {}

export function getSlugTupleFromCache(tuple: SlugTuple) {}
