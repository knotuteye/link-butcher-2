import express = require('express')
import { generateSlug, optimizedSlugRoutine } from './src/hash/generateSlug'
import { insertLink, URLAlreadyExists } from './src/db/database_operations'
import { SlugTuple } from './src/hash/SlugTuple'

const app: express.Application = express()

const port = process.env.PORT || 5000

/**SLUG ENDPOINTS */

app.get('/slugs/create', function (req, res) {
	let url = req.query.url?.toString() // Convert url to string

	let slugTuple: SlugTuple | null

	optimizedSlugRoutine(url).then((result) => {
		if (result) {
			res.json({ slug: result.slug, url: result.url })
		} else {
			let hook = generateSlug(url)
			slugTuple = hook.next().value

			// TODO: Make this recursive
			URLAlreadyExists(slugTuple).then(async (bool) => {
				while (bool) {
					slugTuple = hook.next().value

					bool = await URLAlreadyExists(slugTuple)
				}
			})

			slugTuple
				? insertLink(slugTuple)
						.then(() => {
							res.json({ slug: slugTuple?.slug, url: slugTuple?.url })
						})
						.catch((err) =>
							res.json({ error: err || 'An error occurred. Retry' })
						)
				: res.json({ error: 'No URL Provided' })
		}
	})
})

app.listen(port, function () {
	console.log(`URL Shortener live on port ${port}!`)
})
