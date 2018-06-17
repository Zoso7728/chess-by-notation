var Promise = require('bluebird')
var prompt = require('prompt')
var board = require('./_board.js')
var players = require('./_players.js')
var pieces = require('./_pieces.js')

Promise.promisifyAll(prompt)

var GAME_SPACE = function() {
    var players = players.init()
    var board = board.create()

    console.log(players)

    return {
        players: players,
        board: board,
        pieces: pieces.init(players, board)
    }
}

var GETTING_STARTED_PROMPT = {
    properties: {
        startGame: {
            description: 'Ready to start? Y/N',
            type: 'string',
            pattern: /^[ynYN]$/,
            message: 'Must be either Y or N',
            required: true
        }
    }
}

module.exports = {
    run() {
        prompt.start()

        return prompt
            .getAsync(GETTING_STARTED_PROMPT)
            .then(function(result) {
                if (['N', 'n'].includes(result.startGame)) throw new Error('Player left')

                if (['Y', 'y'].includes(result.startGame)) return GAME_SPACE()
            })
            .catch(function(err) {
                console.log('Something went wrong')
                console.log('Error message: ', err.message)
            })
    }
}
