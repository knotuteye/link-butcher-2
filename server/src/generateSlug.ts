const hasher = require('sha-1')

/**
 * This generator function receives a string url and yields an 8 character slug sliced from the hashed input.
 * @param url The url to hash
 */
export default function* (url: string): Generator<string, null, void> {
  let salt: string = `${url}${Date.now}`
  let hash: string = hasher(salt)

  let index: number = 0
  while (index <= hash.length - 8) {
    yield hash.slice(index, index + 8)
    index++
  }
  return null
}
