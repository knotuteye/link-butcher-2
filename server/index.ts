import express = require('express')
import { generateSlug } from './src/hash/generateSlug'
import { insertLink } from './src/db/database_operations'
import { SlugTuple } from './src/hash/SlugTuple'

const app: express.Application = express()

const port = process.env.PORT || 5000

app.get('/', function (req, res) {
  const slug: SlugTuple | null = generateSlug(req.query.url?.toString()).next()
    .value
  insertLink(slug)
  res.json(slug)
})

app.listen(port, function () {
  console.log(`URL Shortener live on port ${port}!`)
})
