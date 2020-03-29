const express = require('express')
const router = express.Router()
const albumController = require('../controllers/album.controller')

/**
 * @api {get} /album/top Request Top Album
 * @apiName GetTopAlbum
 * @apiGroup Album
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200
 *       "message": "OK",
 *        "data" : [{
 *              "album_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI78qtY_uZoZjwjVFOoHX3a-ILe0OHIIKo7Anf8It5TI9VpJUvE6VtrTk",
 *              "artist": "Imagine Dragons"
 *          }]
 *     }
 *
 * @apiError Internal Server Error
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status" : 500,
 *        "message" : "INTERNAL SERVER ERROR"
 *     }
 */

router.get('/top', albumController.top)

module.exports = router