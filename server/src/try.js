var generateSlug = require('../src/generateSlug').default

let hook = generateSlug('https://google.com')
let curr = hook.next()

while (!curr.done) {
  console.log(curr.value)
  curr = hook.next()
}
