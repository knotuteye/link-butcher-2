export class SlugTuple {
	constructor(slug: string, url: string) {
		this.slug = slug
		this.url = url
	}
	public slug: string
	public url: string
	public error: string = ''
}
