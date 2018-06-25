import { PLAYERS, COLUMN_IDS, PIECE_TYPES } from '../basic-data.js'

// ----------------------------------------------------------------------------
// Pieces
// ----------------------------------------------------------------------------

export const createPieces = () => {
    console.log('Creating pieces...')

    const pieces = []
    let pieceId = 0

    // Players
    for(let i = 0; i < PLAYERS.length; i++) {

        // Types
        for(let j = 0; j < PIECE_TYPES.length; j ++) {
            const { type, count, value } = PIECE_TYPES[j]

            // Pieces
            for(let l = 0; l < count; l++) {
                pieces.push({
                    pieceId: pieceId++,
                    color: !i ? 'white' : 'black',
                    type,
                    value,
                    captured: false,
                    position: null, // columnId + rowId
                })
            }
        }
    }

    return pieces
}

// ----------------------------------------------------------------------------
// Board
// ----------------------------------------------------------------------------

export const isOdd = num => num % 2

export const calcColor = (columnId, rowId) => {
    const columnIdx = COLUMN_IDS.indexOf(columnId)
    const isColumnEven = !isOdd(columnIdx)
    const isColumnOdd = isOdd(columnIdx)

    const isRowEven = !isOdd(rowId)
    const isRowOdd = isOdd(rowId)

    if ((isRowEven && isColumnEven) || (isRowOdd && isColumnOdd)) return 'black'
    return 'white'
}

export const createBoard = () => {
    console.log('Creating board...')

    const BOARD_LENGTH = 8
    const board = []

    // row
    for(let i = 0; i < BOARD_LENGTH; i++) {
        const row = []

        // column
        for(let j = 0; j < BOARD_LENGTH; j++) {
            row.push({
                columnId: COLUMN_IDS[j],
                rowId: i + 1,
                color: calcColor(j, i),
            })
        }

        board.push(row)
    }

    return board
}

// ----------------------------------------------------------------------------
// Setting pieces on board
// ----------------------------------------------------------------------------

export const getStartingRowIds = string => string === 'pawn' ? { white: 2, black: 7 } : { white: 1, black: 8 }

export const getColumnIdByIndexes = arr => arr ? arr.map(idx => COLUMN_IDS[idx]) : COLUMN_IDS

export const filterPiecesForPlayer = (arr, color, type) => {
    const piecesForPlayer = arr.filter(i => i.color === color)
    if (!type) return piecesForPlayer

    return piecesForPlayer.filter(p => p.type === type)
}

export const set = (allPieces, type, columnIndexes) => {
    const rowIds = getStartingRowIds(type)
    const columnIds = getColumnIdByIndexes(columnIndexes)

    PLAYERS.forEach(({ color }) => {
        const rowId = rowIds[color]

        filterPiecesForPlayer(allPieces, color, type)
            .forEach((piece, key) => {
                const columnId = columnIds[key]
                piece.position = `${columnId}${rowId}`
            })
    })
}

export const setPiecesOnBoard = (pieces, board) => {
    console.log('Setting pieces on the board...')

    PIECE_TYPES.forEach(({ val, columnIndexes }) => {
        set(pieces, val, columnIndexes)
    })
}
