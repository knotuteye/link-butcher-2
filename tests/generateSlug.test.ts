import generateSlug from '../src/hash/generateSlug'
import { SlugTuple } from '../src/hash/SlugTuple'

test('adds 1 + 2 to equal 3', async () => {
  expect(await generateSlug('http://youtube.com')).toBe(
    new SlugTuple('ZmExMTA3', 'http://youtube.com')
  )
})
