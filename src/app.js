import 'babel-polyfill'
import createGame from './lib/create-game/run.js'
import takeTurn from './lib/take-turn/run.js'

(async () => {
    try {
        const game = createGame()

        let turn = 0
        let turnCount = 0

        console.log('Ready to begin!')
        console.log('Notation example: d2-d4')

        while (turnCount < 10) {
            await takeTurn(turn, turnCount, game)

            // console.log(game.pieces)

            turn = !turn ? 1 : 0
            turnCount++
        }

        console.log('Game Over!')
    } catch (err) {
        console.log(err)
    }
})()
