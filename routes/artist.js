const express = require('express')

const router = express.Router()
const artistController = require('../controllers/artist.controller')

/**
 * @api {get} /artist/song/:id_artist Request List lyric of arist
 * @apiName GetListLyric
 * @apiGroup Artist
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200
 *       "message": "OK",
 *        "data" : {
 *              "name" : "I Prevail",
 *               "id_artist" : "iprevail"
 *          },
 *          "song" : [{
 *              "title": "Heart vs Mind",
 *               "id_song": "heartvsmind"
 *          }]
 *          
 *        }
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
router.get('/song/:artist', artistController.getSongs)

/**
 * @api {get} /artist/list/:alphabet Request List Artis
 * @apiName GetListArtist
 * @apiGroup Artist
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200
 *       "message": "OK",
 *        "data" : [
 *              {
 *                  "artist": "A1",
 *                  "id_artist": "a1"
 *              },
 *              {
 *                  "aritst" : "Avenged Sevenfold",
 *                  "id_artist": "avengedsevenfold"
 *              }
 *          ]
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
router.get('/list/:huruf', artistController.listArtist)

module.exports = router