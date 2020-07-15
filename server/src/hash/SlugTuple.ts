export class SlugTuple {
  constructor(slug: string, url: string | undefined) {
    this.slug = slug
    this.url = url
  }
  public slug: string
  public url: string | undefined
}
