const express = require('express')

const router = express.Router()
const artistController = require('../controllers/artist.controller')

router.get('/song/:artist', artistController.getSongs)
router.get('/list/:huruf', artistController.listArtist)

module.exports = router