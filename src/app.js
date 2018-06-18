import inquirer from 'inquirer'
import createGame from './game-prep/run.js'

const checkIfReady = async () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'startGame',
            message: 'Ready to start?',
            validate: input => input === 'y',
        },
    ])
}

const run = async () => {
    const { startGame } = await checkIfReady()

    if (!startGame) {
        console.log('Players not ready...')
        return
    }

    const game = createGame()
    console.log(game)
}

run()
