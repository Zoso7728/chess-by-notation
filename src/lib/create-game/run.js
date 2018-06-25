import { PLAYERS as players } from '../basic-data.js'
import { createPieces, createBoard, setPiecesOnBoard } from './_util.js'

export default function() {
    const pieces = createPieces()
    const board = createBoard()

    setPiecesOnBoard(pieces, board)

    return {
        turn: 0, // Will alternate between 0 and 1 based on white and black
        turnCount: 0,
        players,
        pieces,
        board,
    }
}
