const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT || 3000

//import routes
const albumRoute = require('./routes/album')
const lyricRoute = require('./routes/lyric')
const artistRoute = require('./routes/artist')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/album', albumRoute)
app.use('/api/lyric', lyricRoute)
app.use('/api/artist', artistRoute)

app.listen(PORT, () => console.log("Something running on PORT 3000"))