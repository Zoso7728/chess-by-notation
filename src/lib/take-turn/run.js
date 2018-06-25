import inquirer from 'inquirer'
import validate from './_validate.js'

export default async function(turn, turnCount, game) {
    const { players, pieces } = game
    const { tag: playerTag, color } = players[turn]

    return inquirer.prompt([{
        name: 'notation',
        message: `${playerTag} (${color})`,
        validate: validate(color, pieces),
    }])
}
