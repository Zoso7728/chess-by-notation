import { filter } from 'lodash'
import { columnIds } from '../utils.js'

const getPiecesByColor = (pieces, color) => filter(pieces, { color })

const setUpPawns = (board, pieces) => {
    board.forEach((row, rowId) => {
        if (rowId === 1) {
            const whitePawns = filter(pieces, ({ color, type }) => color === 'white' && type === 'pawn')

            row.forEach((column, columnId) => {
                whitePawns[columnId].position = `${columnIds[columnId]} ${rowId + 1}`
            })
        }

        if (rowId === 6) {
            const whitePawns = filter(pieces, ({ color, type }) => color === 'black' && type === 'pawn')

            row.forEach((column, columnId) => {
                whitePawns[columnId].position = `${columnIds[columnId]} ${rowId + 1}`
            })
        }
    })
}

const setUpRooks = (board, pieces) => {
    board.forEach((row, rowId) => {
        if (rowId === 0) { // White
            const whiteRooks = filter(pieces, ({ color, type }) => color === 'white' && type === 'rook')

            whiteRooks[0].positions = `${row[0].columnId} ${rowId + 1}`
            whiteRooks[1].positions = `${row[row.length - 1].columnId} ${rowId + 1}`
        }

        if (rowId === 8) { // Black
            const blackRooks = filter(pieces, ({ color, type }) => color === 'black' && type === 'rook')

            blackRooks[0].positions = `${columnIds[row[0].columnId]} ${rowId + 1}`
            blackRooks[1].positions = `${columnIds[row[row.length - 1].columnId]} ${rowId + 1}`
        }
    })
}

export default function(players, pieces, board) {
    console.log('Setting pieces on the board...')

    board.forEach((row, rowId) => {

    })
}
