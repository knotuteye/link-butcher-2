const hasher = require('sha-1')

export default function (url: string): string {
  return hasher(url).slice(0, 8)
}
