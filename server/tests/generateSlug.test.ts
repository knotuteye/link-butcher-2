let generateSlug = require('../src/generateSlug').default

test('should return slug', () => {
  expect(generateSlug('https://www.google.com').next().value).toBe('ZDNkNjJk')
})

function checkAlternativeSlug(index: number): string {
  const hook: Generator = generateSlug('https://www.google.com')
  for (let i = 0; i < index; i++) {
    hook.next()
  }
  let str = hook.next().value
  return str
}

test('should return nth slug', () => {
  expect(checkAlternativeSlug(5)).toBe('jJkYzEzM')
})
