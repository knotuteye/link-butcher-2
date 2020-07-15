import hasher = require('sha-1')
import encoder = require('base64-url')
import { SlugTuple } from './SlugTuple'
import { getURLIfAlreadyExists } from '../db/database_operations'

export function optimizedSlugRoutine(
	url: string | undefined
): Promise<SlugTuple | null> {
	return new Promise((resolve, reject) => {
		if (!url || url == '') {
			return null
		}

		getURLIfAlreadyExists(url)
			.then((result: SlugTuple | null) => {
				let oldSlugTuple = result || null

				// console.log('Using Old Link')

				resolve(oldSlugTuple)
			})
			.catch((err) => reject(err))
	})
}

/**
 * This generator function receives a string url and yields an 8 character slug sliced from the hashed input.
 * @param url The url to hash
 */
export function* generateSlug(
	url: string | undefined
): Generator<SlugTuple, null, void> {
	//Generate new slug

	let salt: string = `${url}${'a very spicy salt'}`

	let hash: string = hasher(salt)

	let slugParent: string = encoder.encode(hash)

	let index: number = 0
	while (index <= slugParent.length - 8) {
		yield new SlugTuple(slugParent.slice(index, index + 8), url)
		index++
	}

	return null
}
