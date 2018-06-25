import { isEmpty } from 'lodash'

const NOTATION_REGEX = /^([a-h]?[1-9]?]*)-([a-h]?[1-9]?]*)/
const extractNotation = input => NOTATION_REGEX.exec(input)

export default (color, pieces) => input => {
    if (!NOTATION_REGEX.test(input)) return 'Incorrect syntax! Example: a2-a3'

    const [_, from, to] = extractNotation(input) // eslint-disable-line

    const pieceToMove = pieces.filter(piece => from === piece.position)[0]

    if (isEmpty(pieceToMove) || pieceToMove.color !== color) {
        return `${input} ${from} does not contain a movable piece for ${color}`
    }

    // const availablePositions = calcAvailablePositions[pieceToMove.type](pieces, color, from, to)

    // if (isEmpty(availablePositions) || !availablePositions.includes(to)) {
    //     return `${input} ${to} is not an acceptable destination for ${color}`
    // }

    // if (availablePositions.includes(to)) pieceToMove.position = to

    return true
}
