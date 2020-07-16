export async function getRecentLinks(endpoint: string) {
  return await fetch(endpoint).then(results => results.json())
}

export async function getNewLink(endpoint: string, url: string) {
  return await fetch(endpoint, {
    body: JSON.stringify({ url: url }),
    method: 'POST'
  }).then(results => results.json())
}
