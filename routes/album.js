const express = require('express')
const router = express.Router()
const albumController = require('../controllers/album.controller')

router.get('/top', albumController.top)

module.exports = router