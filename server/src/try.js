var generateSlug = require('../src/generateSlug').default

for (let index = 0; index < 13; index++) {
  let hook = generateSlug('https://google.com')
  console.log(hook.next().value)
}
