import buildBoard from './_board.js'
import buildPieces from './_pieces.js'

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
    const pieces = buildPieces(players)
    const board = buildBoard(players, pieces)

    return {
        players,
        pieces,
        board,
        turn: 0, // Will alternate between 0 and 1 based on white and black
    }
}
