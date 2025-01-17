/** Module Imports */
import express = require('express')
import cors = require('cors')
import bodyParser = require('body-parser')

/** Local Imports */
import {
	getRecentTuples,
	getTupleIfSlugAlreadyExists,
} from './src/db/database_operations'
import generateSlugTuple from './src/hash/generateSlug'

const app: express.Application = express()

/** Setting Up Middleware */
app.use(cors())
app.use(express.static('./client/dist'))
app.use(bodyParser.json())

/** API Endpoints */

/** Create Slug */
app.post('/slugs/create', async function (req, res) {
	let url: string = req.body.url
	url
		? res.json(await generateSlugTuple(url))
		: // : res.json({ error: 'No URL Provided' })
		  res.sendStatus(400).send('No URL Provided')
})

/** Fetch Recent Links */
app.get('/slugs/all', async function (req, res) {
	res.json(await getRecentTuples(req.query.id as string))
})

/** Redirection */
app.get('/:slug', async (req, res) => {
	let tuple = await getTupleIfSlugAlreadyExists(req.params.slug)

	// If url was found in db, redirect else show error message
	tuple
		? res.redirect(tuple.url)
		: res.sendStatus(404).send("<h1> This link doesn't exist ...yet </h1>")
})

/** Listener */
app.listen(process.env.PORT || 5000, async function () {
	console.log(`URL Shortener live !`)
})
