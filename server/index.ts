import express = require('express')

const app: express.Application = express()

const port = process.env.PORT || 5000

app.get('/', function (req, res) {
  
})

app.listen(port, function () {
  console.log(`URL Shortener live on port ${port}!`)
})
