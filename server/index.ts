import express = require('express')

const app: express.Application = express()

const port: number = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.send('URL Shortener Backend')
})

app.listen(3000, function () {
  console.log(`URL Shortener live on port ${port}!`)
})
