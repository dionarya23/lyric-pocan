const cheerio = require('cheerio')
const status = require('http-status')
const request = require('request')

module.exports = {
    getSongs(req, res) {
        const { artist } = req.params
        request({
            method: 'GET',
            url: `${process.env.BASE_URLAZLYRIC}/${artist.charAt(0)}/${artist}.html`
        }, (err, result, body) => {
            
            if (err) {
                res.status(status.INTERNAL_SERVER_ERROR).json({
                    status: status.INTERNAL_SERVER_ERROR,
                    message: status[status.INTERNAL_SERVER_ERROR]
                })
            }
         
            const $ = cheerio.load(body)
            const song = []
            let songs = $('div.listalbum-item a')
            let artistName = $('title').text().replace(/ Lyrics/g, '')
            songs.each((index, element) => {
                let id_song = element.children[0].parent.attribs.href.split('/')[3]
                let newIdSong = id_song.replace(/.html/g, '')
               song.push({
                   title: element.children[0].data,
                   id_song: newIdSong
               })  
            })

            const songsOfArtist = {
                artist: {
                    name: artistName,
                    id_artist: artist 
                },
                songs: song
            }

            res.status(status.OK).json({
                status: status.OK,
                message: status[status.OK],
                data: songsOfArtist
            })
        })
    },

    listArtist(req, res) {
        const { huruf } = req.params
        request({
            method: 'GET',
            url: `${process.env.BASE_URLAZLYRIC}/${huruf}.html`
        }, (err, result, body) => {

            if (err) {
                console.log("message : ", err)
                res.status(status.INTERNAL_SERVER_ERROR).json({
                    status: status.INTERNAL_SERVER_ERROR,
                    message: status[status.INTERNAL_SERVER_ERROR]
                })
            }

            const $ = cheerio.load(body)
            let list_artist = $("div.col-sm-6.text-center.artist-col a")

            let artist = []
            list_artist.each((index, element) => {
                // console.log("elemt setiap song : ", element.children[0].data)
                let id_artist = element.children[0].parent.attribs.href.split('/')[1]
                let newIdArtist = id_artist.replace(/.html/g, '')
               
                artist.push({
                   artist: element.children[0].data,
                   id_artist: newIdArtist
               })  
            })

            res.status(status.OK).json({
                status: status.OK,
                message: status[status.OK],
                data: artist
            })

        })
    } 
}