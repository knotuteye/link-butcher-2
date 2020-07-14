const hasher = require('sha-1')

/**
 * This function receives a string url and returns an 8 character slug
 * @param url The url to hash
 */
export default function (url: string): string {
  return hasher(url).slice(0, 8)
}
