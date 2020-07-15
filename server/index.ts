import express = require('express')
import cors = require('cors')
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
app.use(express.static('public'))

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

app.get('/slugs/all', async function (req, res) {
	res.json(await getAllTuples())
})

/**REDIRECT ENDPOINT */
app.get('/:slug', async (req, res) => {
	let url = await getURLOfExistingSlugTuple(req.params.slug)
	url ? res.redirect(url) : res.json({ error: 'This link does not exist' })
})

app.get('/', (req, res) => {
	res.send('<h1>URL Shrink Backend</h1>')
})

app.listen(port, function () {
	console.log(`URL Shortener live on port ${port}!`)
})
