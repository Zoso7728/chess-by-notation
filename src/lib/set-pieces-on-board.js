import { getByColor, getByType } from '../util.js'

const WHITE_POWER_ROW_ID = 0
const WHITE_PAWN_ROW_ID = 1
const BLACK_POWER_ROW_ID = 7
const BLACK_PAWN_ROW_ID = 6

const isRowForPawns = rowId => rowId === WHITE_PAWN_ROW_ID || rowId === BLACK_PAWN_ROW_ID
const isRowForPowerPieces = rowId => rowId === WHITE_POWER_ROW_ID || rowId === BLACK_POWER_ROW_ID

const getRelevantColumns = (row, indexes) => indexes.map(i => row[i])

const set = (row, rowId, pieces) => {
    row.forEach(({ columnId }, key) => {
        pieces[key].position = `${columnId}${rowId + 1}`
    })
}

const setUp = {
    pawns: (row, rowId, pieces) => {
        if (!isRowForPawns(rowId)) return

        const pawns = getByType(pieces, 'pawn')

        if (rowId === WHITE_PAWN_ROW_ID) set(row, rowId, getByColor(pawns, 'white'))
        if (rowId === BLACK_PAWN_ROW_ID) set(row, rowId, getByColor(pawns, 'black'))
    },
    rooks: (row, rowId, pieces) => {
        if (!isRowForPowerPieces(rowId)) return

        const rooks = getByType(pieces, 'rook')

        const indexes = [0, 7]
        const relevantTiles = getRelevantColumns(row, indexes)

        if (rowId === WHITE_POWER_ROW_ID) set(relevantTiles, rowId, getByColor(rooks, 'white'))
        if (rowId === BLACK_POWER_ROW_ID) set(relevantTiles, rowId, getByColor(rooks, 'black'))
    },
    knights: (row, rowId, pieces) => {
        if (!isRowForPowerPieces(rowId)) return

        const knights = getByType(pieces, 'knight')

        const indexes = [1, 6]
        const relevantTiles = getRelevantColumns(row, indexes)

        if (rowId === WHITE_POWER_ROW_ID) set(relevantTiles, rowId, getByColor(knights, 'white'))
        if (rowId === BLACK_POWER_ROW_ID) set(relevantTiles, rowId, getByColor(knights, 'black'))
    },
    bishops: (row, rowId, pieces) => {
        if (!isRowForPowerPieces(rowId)) return

        const bishops = getByType(pieces, 'bishop')

        const indexes = [2, 5]
        const relevantTiles = getRelevantColumns(row, indexes)

        if (rowId === WHITE_POWER_ROW_ID) set(relevantTiles, rowId, getByColor(bishops, 'white'))
        if (rowId === BLACK_POWER_ROW_ID) set(relevantTiles, rowId, getByColor(bishops, 'black'))
    },
    queens: (row, rowId, pieces) => {
        if (!isRowForPowerPieces(rowId)) return

        const queens = getByType(pieces, 'queen')

        const indexes = [3, 4]
        const relevantTiles = getRelevantColumns(row, indexes)

        // Queen always gets her color
        if (rowId === WHITE_POWER_ROW_ID) {
            const color = 'white'
            set(
                getByColor(relevantTiles, color),
                rowId,
                getByColor(queens, color)
            )
        }

        if (rowId === BLACK_POWER_ROW_ID) {
            const color = 'black'
            set(
                getByColor(relevantTiles, color),
                rowId,
                getByColor(queens, color),
            )
        }
    },
    kings: (row, rowId, pieces) => {
        if (!isRowForPowerPieces(rowId)) return

        const kings = getByType(pieces, 'king')

        const indexes = [3, 4]
        const relevantTiles = getRelevantColumns(row, indexes)

        // King gets opposite color
        if (rowId === WHITE_POWER_ROW_ID) {
            set(
                getByColor(relevantTiles, 'black'),
                rowId,
                getByColor(kings, 'white')
            )
        }

        if (rowId === BLACK_POWER_ROW_ID) {
            set(
                getByColor(relevantTiles, 'white'),
                rowId,
                getByColor(kings, 'black'),
            )
        }
    },
}

export default function(players, pieces, board) {
    console.log('Setting pieces on the board...')

    board.forEach((row, rowId) => {
        setUp.pawns(row, rowId, pieces)
        setUp.rooks(row, rowId, pieces)
        setUp.knights(row, rowId, pieces)
        setUp.bishops(row, rowId, pieces)
        setUp.queens(row, rowId, pieces)
        setUp.kings(row, rowId, pieces)
    })
}
