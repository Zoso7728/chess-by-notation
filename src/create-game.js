import createBoard from './lib/create-board.js'
import createPieces from './lib/create-pieces.js'
import setPiecesOnBoard from './lib/set-pieces-on-board.js'

const players = [
    {
        id: 0, // white
        tag: 'Player 1',
    },
    {
        id: 1, // black
        tag: 'Player 2',
    },
]

export default function() {
    const pieces = createPieces(players)
    const board = createBoard(players, pieces)

    setPiecesOnBoard(players, pieces, board)

    return {
        turn: 0, // Will alternate between 0 and 1 based on white and black
        players,
        pieces,
        board,
    }
}
