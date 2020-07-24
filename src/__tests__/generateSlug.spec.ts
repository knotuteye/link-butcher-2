import { generateEncodedHash } from '../hash/generateSlug'

describe('generateSlug.ts', () => {
	it('generates random string', () => {
		expect(generateEncodedHash('http://google.com')).toBe(
			'YWZmOGFiMjY5NWY4MzYwMWQ5ZTRkOGIxZGE5OWE5NzdlM2Q2NzJkMA'
		)
	})
})
