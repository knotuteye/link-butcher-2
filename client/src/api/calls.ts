import store from '../store'

const server = store.state.server

export async function getRecentLinks() {
  return await fetch(`${server}slugs/all`, {
    method: 'POST'
  }).then(results => results.json())
}

export async function getNewLink(url: string) {
  return await fetch(`${server}slugs/create`, {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ url: url }),
    method: 'POST'
  }).then(results => results.json())
}
