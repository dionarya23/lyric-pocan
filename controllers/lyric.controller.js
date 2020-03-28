const Xray = require('x-ray')
const x = Xray()
const cheerio = require('cheerio')
const request = require('request')
const status = require('http-status')

module.exports = {
    top(req, res) {
       x(process.env.BASE_URLAZLYRIC, 'div.col-xs-12.col-sm-6.col-lg-4.col-lg-offset-2.hotsongs div.list-group.hotsongs-lg1 a.list-group-item', [{
           artist_song: '',
       }]).then(result => {

        result.map(e => {
            let temp = e.artist_song.split('-')
            delete e.artist_song
            e.artist = temp[0]
            e.song = temp[1]
        })

            res.status(status.OK).json({
                status: status.OK,
                message: status[status.OK],
                data: result
            })

       }).catch(err => {
           console.log("Something Error : ", err)
           res.status(status.INTERNAL_SERVER_ERROR).json({
               status: status.INTERNAL_SERVER_ERROR,
               message: status[status.INTERNAL_SERVER_ERROR]
           })
       })
    },

    getLyric(req, res) {
        const { artist, song } = req.params

        request({
            method: 'GET',
            url: `${process.env.BASE_URLAZLYRIC}/lyrics/${artist}/${song}.html`
        }, (err, result, body) => {
            if (err) {
                console.log("something error : ", err)
                res.status(status.INTERNAL_SERVER_ERROR).json({
                    status: status.INTERNAL_SERVER_ERROR,
                    message: status[status.INTERNAL_SERVER_ERROR]
                })
            }

            const $ = cheerio.load(body)
            let titleWeb = $('title').text().split("-")

            let artistName = titleWeb[0]
            let songName = titleWeb[1].replace(/ Lyrics \| AZLyrics.com/g, '')
            // songName = songName.replace(/ |/g, '')
            let lyric = $("div.col-xs-12.col-lg-8.text-center div").text()

            res.status(status.OK).json({
                status: status.OK,
                message: status[status.OK],
                data: {
                    artist: {
                        name: artistName,
                        id_artist: artist
                    },
                    song: {
                        id_song: song,
                        title: songName,
                        lyric: lyric
                    }
                }
            })
        })
    }
}