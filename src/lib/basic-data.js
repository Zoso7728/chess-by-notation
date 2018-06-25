export const COLUMN_IDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

export const PIECE_TYPES = [
    {
        type: 'pawn',
        count: 8,
        value: 1,
    },
    {
        type: 'rook',
        count: 2,
        value: 5,
        columnIndexes: [0, 7],
    },
    {
        type: 'knight',
        count: 2,
        value: 3,
        columnIndexes: [1, 6],
    },
    {
        type: 'bishop',
        count: 2,
        value: 3,
        columnIndexes: [2, 5],
    },
    {
        type: 'queen',
        count: 1,
        value: 9,
        columnIndexes: [3],
    },
    {
        type: 'king',
        count: 1,
        value: 0,
        columnIndexes: [4],
    },
]

export const PLAYERS = [
    {
        id: 0,
        tag: 'Player 1',
        color: 'white',
        score: 0,
    },
    {
        id: 1,
        tag: 'Player 2',
        color: 'black',
        score: 0,
    },
]
