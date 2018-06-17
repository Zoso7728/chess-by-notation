import { filter } from 'lodash'

const isOdd = num => num % 2

const calcColor = (columnId, rowId) => {
    const isRowEven = !isOdd(rowId)
    const isRowOdd = isOdd(rowId)

    const isColumnEven = !isOdd(columnId)
    const isColumnOdd = isOdd(columnId)

    if (isRowEven && isColumnEven) return 'black'
    if (isRowOdd && isColumnOdd) return 'black'
    if (isRowEven && isColumnOdd) return 'white'
    if (isRowOdd && isColumnEven) return 'white'
}

const columnIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

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

const build = () => {
    const BOARD_LENGTH = 8

    const board = []

    // row
    for(let i = 0; i < BOARD_LENGTH; i++) {
        const row = []

        // column
        for(let j = 0; j < BOARD_LENGTH; j++) {
            row.push({
                columnId: columnIds[j],
                rowId: i + 1,
                color: calcColor(j, i),
            })
        }

        board.push(row)
    }

    return board
}

export default function(players, pieces) {
    const board = build()
    setUpPawns(board, pieces)

    return board
}
