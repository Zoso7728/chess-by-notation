import Promise from 'bluebird'
import prompt from 'prompt'
import prepareGame from './game-prep/run.js'

Promise.promisifyAll(prompt)

const GETTING_STARTED_PROMPT = {
    properties: {
        startGame: {
            description: 'Ready to start? y/n',
            type: 'string',
            pattern: /^[yn]$/,
            message: 'was not y or n...',
            required: true,
        },
    },
}

const run = async () => {
    prompt.start()

    const { startGame } = await prompt.getAsync(GETTING_STARTED_PROMPT)
    if (startGame === 'n') console.log('Player left')
    if (startGame === 'y') {
        const game = prepareGame()

        console.log(game)
    }
}

run()
