import { getByColor } from '../../util.js'
import { columnIds } from '../create-game/_board.js'

const getAvailablePieces = pieces => filter(pieces, { captured: false })

const ROW_ID_REGEX = /[1-9]/
const extractRowId = input => ROW_ID_REGEX.exec(input)

const COLUMN_ID_REGEX = /[a-h]/
const extractColumnId = input => COLUMN_ID_REGEX.exec(input)

const checkAttacking = (pieces, color, to) => {
    const piecesByColor = getByColor(pieces, color)
    const availablePieces = getAvailablePieces(piecesByColor)
    return availablePieces.filter(piece => to === piece.position).length
}

export default {
    pawn: (pieces, color, from, to) => {
        // move one space diagonal to the left (only when attacking)
        // move one space diagonal to the right (only when attacking)

        const opposingColor = color === 'black' ? 'white' : 'black'
        const direction = color === 'white' ? 'positive' : 'negative'
        const rowId = Number(extractRowId(from)[0])
        const columnId = extractColumnId(from)[0]
        const columnIdx = columnIds.indexOf(columnId)

        const availablePositions = []

        const forwardOneSpace = `${columnId}${direction === 'positive' ? rowId + 1 : rowId - 1}`
        const forwardTwoSpaces = `${columnId}${direction === 'positive' ? rowId + 2 : rowId - 2}`

        const diagonalLeft = `${direction === 'positive' ? columnIds[columnIdx + 1] : columnIds[columnIdx - 1]}${direction}`
        const diagonalRight = `${direction === 'positive' ? columnIds[columnIdx - 1] : columnIds[columnIdx + 1]}${direction}`

        if (!checkAttacking(pieces, opposingColor, forwardOneSpace)) availablePositions.push(forwardOneSpace)
        if (!checkAttacking(pieces, opposingColor, forwardTwoSpaces)) {
            availablePositions.push(forwardTwoSpaces)
        }


        if (diagonalLeft && checkAttacking(pieces, opposingColor, diagonalLeft)) {
            availablePositions.push(diagonalLeft)
        }

        if (diagonalRight && checkAttacking(pieces, opposingColor, diagonalRight)) {
            availablePositions.push(diagonalRight)
        }

        return availablePositions
    },
}
