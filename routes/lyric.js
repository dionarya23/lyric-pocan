const express = require('express')
const router = express.Router()
const lyricController = require('../controllers/lyric.controller')
/**
 * @api {get} /lyric/top Request Top Song
 * @apiName GetTopSong
 * @apiGroup Lyric
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200
 *       "message": "OK",
 *        "data" : [{
 *              "artist": "Wiz Khalifa ",
 *              "song":  \"Contact\"
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
router.get('/top', lyricController.top)
/**
 * @api {get} /lyric/artist/:id_artist/:id_song Request Lyric of Song
 * @apiName GetLyric
 * @apiGroup Lyric
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200
 *       "message": "OK",
 *        "data" : {
 *              "artist" : {
 *                  "name": "I Prevail",
 *                   "id_artist": "iprevail"
 *              },
 *              "song" : {
 *                  "id_song" : "scars",
 *                    "title": "Scars",
 *                      "lyric": "lyric here"
 *              }
 *          }
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
router.get('/artist/:artist/:song', lyricController.getLyric)

module.exports = router