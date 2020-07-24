import hasher = require('sha-1')
import encoder = require('base64-url')
import {
	getTupleIfURLAlreadyExists,
	insertLink,
} from '../db/database_operations'
import { SlugTuple } from './SlugTuple'

/**
 * This generator function receives a string url and
 * yields an 8 character slug sliced from the hashed input.
 */
export default async function generateSlugTuple(url: string) {
	// If URL has been processed before, return it
	const oldTuple = await getTupleIfURLAlreadyExists(url)
	if (oldTuple) return oldTuple

	// Else Create a new SlugTuple
	const slugParent = generateEncodedHash(url)

	// Assign Generator
	const generator = sliceTillUnique(slugParent)

	// Keep generating slugs while current slug already exists in DB
	let slug = ''
	do {
		slug = generator.next().value
	} while (await getTupleIfURLAlreadyExists(url))

	// Create new SlugTuple object
	let newTuple = new SlugTuple(slug, url)

	// Insert new SlugTuple into database
	await insertLink(newTuple).catch((err) => {
		// Error Handling
		console.error('Critical: insertLink routine failed')
		console.table(err)
	})

	/**
	 * Send message to user when:
	 * i. insertion failed
	 * ii. bday paradox
	 */

	return newTuple
}

/**
 * This function takes a string url input and returns the
 * base64 encoding of its sha-1 hash.
 * @param url The url to hash and encode
 */
export function generateEncodedHash(url: string) {
	let salt = `${url}${'a very spicy salt'}`
	let hash = hasher(salt)
	let slugParent: string = encoder.encode(hash)
	return slugParent
}

/**
 * This generator function takes a long string input and yields
 * 8-character segments from it, beginning from index 0.
 * @param slugParent The string to slice
 */
export function* sliceTillUnique(slugParent: string) {
	for (let i = 0; i <= slugParent.length - 8; i++) {
		yield slugParent.slice(i, i + 8)
	}
	console.error('Birthday Paradox fulfilled')
	return ''
}
