export async function getRecentLinks(endpoint: string) {
  return await fetch(endpoint).then(results => results.json())
}
