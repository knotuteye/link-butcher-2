const generateSlug = require('../src/generateSlug').default

test('should return slug', () => {
  expect(generateSlug('https://google.com')).toBe('72fe95c5')
})

test('should return slug', () => {
  expect(generateSlug('https://www.google.com/doodles')).toBe('bb14ca9d')
})

test('should return slug', () => {
  expect(generateSlug('pbid.io')).toBe('79cf4af9')
})