import hasher = require('sha-1')
import encoder = require('base64-url')

/**
 * This generator function receives a string url and yields an 8 character slug sliced from the hashed input.
 * @param url The url to hash
 */
export default function* (url: string): Generator<string, null, void> {
  let salt: string = `${url}${'a very spicy salt'}`

  let hash: string = hasher(salt)

  let slugParent: string = encoder.encode(hash)

  let index: number = 0
  while (index <= slugParent.length - 8) {
    yield slugParent.slice(index, index + 8)
    index++
  }

  return null
}
