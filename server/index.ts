import express = require('express')
import { generateSlug } from './src/hash/generateSlug'
import { insertLink } from './src/db/database_operations'
import { SlugTuple } from './src/hash/SlugTuple'

const app: express.Application = express()

const port = process.env.PORT || 5000

/**SLUG ENDPOINTS */

app.get('/slugs/create', function (req, res) {
	let url = req.query.url?.toString()
	const slugTuple: SlugTuple | null = generateSlug(url).next().value

	insertLink(slugTuple)
		.then(() => {
			res.json(slugTuple)
		})
		.catch((err) => res.json(err))
})

app.listen(port, function () {
	console.log(`URL Shortener live on port ${port}!`)
})
