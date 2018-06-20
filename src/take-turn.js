import inquirer from 'inquirer'
import { isEmpty } from 'lodash'
import { getByColor, getAvailablePieces } from './util.js'

const NOTATION_REGEX = /^([a-h]?[1-9]?]*)-([a-h]?[1-9]?]*)/
const extractNotation = input => NOTATION_REGEX.exec(input)

const requestNotation = async ({ tag: playerTag, color }, pieces) =>
    inquirer.prompt([{
        type: 'input',
        name: 'notation',
        message: `${playerTag} (${color})`,
        validate: input => {
            if (!NOTATION_REGEX.test(input)) return 'Incorrect syntax! Example: a2-a3'

            const [inputDup, from, to] = extractNotation(input) // eslint-disable-line

            const piecesByColor = getByColor(pieces, color)
            const availablePieces = getAvailablePieces(piecesByColor)
            const pieceToMove = availablePieces.filter(piece => from.includes(piece.position))

            if (isEmpty(pieceToMove)) return `${from} does not contain a movable piece for ${color}`

            return true
        },
    }])

export default async function(turn, turnCount, game) {
    const player = game.players[turn]

    const { notation } = await requestNotation(player, game.pieces)

    const [input, from, to] = NOTATION_REGEX.exec(notation) // eslint-disable-line
}
