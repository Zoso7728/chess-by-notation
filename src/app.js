import createGame from './create-game.js'
import takeTurn from './take-turn.js'

(async () => {
    try {
        const game = createGame()

        let turn = 0
        let turnCount = 0

        console.log('Ready to begin!')
        console.log('Notation example: d2-d4')

        while (turnCount < 10) {
            await takeTurn(turn, turnCount, game)

            turn = !turn ? 1 : 0
            turnCount++
        }

        console.log('Game Over!')
    } catch (err) {
        console.log(err)
    }
})()
