var game = require('./game/run.js')
var log = require('./logger.js').default()

game.run()
    .then(function(gameDetails) {
        console.log(gameDetails)
        // log.info(gameDetails.pieces)
        // log.info(gameDetails.players)
        // log.info(gameDetails.board)
    })
    .catch(function(err) {
        log.error(err)
    })
