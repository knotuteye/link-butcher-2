import express = require('express')
import { generateSlug } from './src/hash/generateSlug'
import { insertLink } from './src/db/database_operations'
import { SlugTuple } from './src/hash/SlugTuple'

const app: express.Application = express()

const port = process.env.PORT || 5000

/**SLUG ENDPOINTS */

app.put('/slugs/create', function (req, res) {
	let url = req.query.url?.toString() // Convert url to string
	const slugTuple = generateSlug(url).next().value // Generate SlugTuple instance from
	slugTuple
		? insertLink(slugTuple)
				.then(() => {
					res.json(slugTuple)
				})
				.catch((err) => res.json({ error: err }))
		: res.json({ error: 'No URL Provided' })
})

app.listen(port, function () {
	console.log(`URL Shortener live on port ${port}!`)
})
