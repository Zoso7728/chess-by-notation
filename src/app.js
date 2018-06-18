import inquirer from 'inquirer'
import createGame from './create-game.js'

const checkIfReady = async () => {
    return inquirer.prompt([{
        type: 'confirm',
        name: 'startGame',
        message: 'Ready to start?',
    }])
}

const run = async () => {
    try {
        const { startGame } = await checkIfReady()

        if (!startGame) {
            console.log('Players not ready...')
            return
        }

        const game = createGame()
        console.log(game.pieces)
    } catch (err) {
        console.log(err)
    }
}

run()
