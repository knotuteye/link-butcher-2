import { generateSlug } from '../src/hash/generateSlug'
import { SlugTuple } from '../src/hash/SlugTuple'

test('should return slug', () => {
	let obj = new SlugTuple('ZDNkNjJk', 'https://www.google.com')
	expect(
		JSON.stringify(generateSlug('https://www.google.com').next().value)
	).toBe(JSON.stringify(obj))
})

// function checkAlternativeSlug(index: number): string {
//   const hook: Generator = generateSlug('https://www.google.com')
//   for (let i = 0; i < index; i++) {
//     hook.next()
//   }
//   let str = hook.next().value
//   return str
// }

// test('should return nth slug', () => {
//   expect(checkAlternativeSlug(5)).toBe('jJkYzEzM')
// })
