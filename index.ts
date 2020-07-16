import express = require('express')
import cors = require('cors')
import bodyParser = require('body-parser')

import {
  getAllTuples,
  getURLOfExistingSlugTuple,
  insertLink,
  URLAlreadyExists,
} from './src/db/database_operations'
import { generateSlug, optimizedSlugRoutine } from './src/hash/generateSlug'
import { SlugTuple } from './src/hash/SlugTuple'

const app: express.Application = express()

app.use(cors())
app.use(express.static('./client/dist'))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

/**SLUG ENDPOINTS */

app.post('/slugs/create', function (req, res) {
  let url = req.body.url?.toString() // Convert url to string

  console.log(url)

  let slugTuple: SlugTuple | null

  optimizedSlugRoutine(url).then((result) => {
    if (result) {
      res.json({ slug: result.slug, url: result.url })
    } else {
      let hook = generateSlug(url)
      slugTuple = hook.next().value

      // TODO: Make this recursive
      URLAlreadyExists(slugTuple)
        .then(async (bool) => {
          while (bool) {
            console.log('Recursive Generation Entered')
            slugTuple = hook.next().value
            console.log(slugTuple?.slug)

            bool = await URLAlreadyExists(slugTuple)
          }
        })

        .then(() => {
          slugTuple
            ? insertLink(slugTuple)
                .then(() => {
                  res.json({ slug: slugTuple?.slug, url: slugTuple?.url })
                })
                .catch((err) =>
                  res.json({ error: err || 'An error occurred. Retry' })
                )
            : res.json({ error: 'No URL Provided' })
        })
    }
  })
})

app.post('/slugs/all', async function (req, res) {
  res.json(await getAllTuples())
})

/**REDIRECT ENDPOINT */
app.get('/:slug', async (req, res) => {
  let url = await getURLOfExistingSlugTuple(req.params.slug)
  url
    ? res.redirect(url)
    : res.send("<h1> This link doesn't exist ...yet </h1>")
})

app.get('/', (req, res) => {
  res.send('<h1>URL Shrink Backend</h1>')
})

app.listen(port, function () {
  console.log(`URL Shortener live on port ${port}!`)
})
