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
export async function generateSlugTuple(url: string) {
  let oldTuple = await getTupleIfURLAlreadyExists(url)
  if (oldTuple) {
    return oldTuple
  }
  let salt = `${url}${'a very spicy salt'}`
  let hash = hasher(salt)
  let slugParent: string = encoder.encode(hash)

  let index = 0
  let newTuple = new SlugTuple('', '')
  while (index <= slugParent.length - 8) {
    newTuple = new SlugTuple(slugParent.slice(index, index + 8), url)
    if (!!(await getTupleIfURLAlreadyExists(newTuple.url))) {
      index++
    } else {
      break
    }
  }
  await insertLink(newTuple).catch(() => {
    console.error('Critical: insertLink routine failed')
  })
  return newTuple
}
