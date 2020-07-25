import store from '../store'

const server = store.state.server

export async function getRecentLinks(_id = '') {
  return await fetch(`${server}slugs/all?id=${_id}`, {
    method: 'GET'
  }).then(results => results.json())
}

export async function getNewLink(url: string) {
  return await fetch(`${server}slugs/create`, {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ url: url }),
    method: 'POST'
  }).then(results => results.json())
}
