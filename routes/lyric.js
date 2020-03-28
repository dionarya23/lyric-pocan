const express = require('express')
const router = express.Router()
const lyricController = require('../controllers/lyric.controller')

router.get('/top', lyricController.top)
router.get('/artist/:artist/:song', lyricController.getLyric)

module.exports = router