const Xray = require('x-ray')
const x = Xray()
const status = require('http-status')

module.exports = {
    top(req, res) {
       x(process.env.BASE_URL, 'div.cblock.fam-artists div.cblock-int ul li', [{
           album_cover : 'div.artist-img a img@src',
           artist: 'div.artist-img a img@title'
       }]).then(result => {

            res.status(status.OK).json({
                status: status.OK,
                message: status[status.OK],
                data: result
            })

       }).catch(err => {
           res.status().json({
               status: status.INTERNAL_SERVER_ERROR,
               message: status[status.INTERNAL_SERVER_ERROR]
           })
       })
    }
}