import createGame from './run.js'
import { isOdd, calcColor, getStartingRowIds, getColumnIdByIndexes, filterPiecesForPlayer } from './_util.js'

describe('Create game tests', () => {
    const { turn, turnCount, players, pieces, board } = createGame()

    describe('Verify game components', () => {
        test('has turn', () => expect(turn).toBeDefined())
        test('has turnCount', () => expect(turnCount).toBeDefined())
        test('has players', () => {
            expect(players).toHaveLength(2)
            players.forEach(player => {
                expect(player.id).toBeDefined()
                expect(player.tag).toBeDefined()
                expect(player.color).toBeDefined()
                expect(player.score).toBe(0)
            })
        })
        test('has pieces', () => {
            expect(pieces).toHaveLength(32)
            pieces.forEach(piece => {
                expect(piece.pieceId).toBeDefined()
                expect(piece.color).toBeDefined()
                expect(piece.type).toBeDefined()
                expect(piece.value).toBeDefined()
                expect(piece.captured).toBeFalsy()
                expect(piece.position).toBeDefined()
            })
        })
        test('has board', () => {
            expect(board).toBeDefined()
            board.forEach(rows => {
                rows.forEach(columns => {
                    expect(columns.columnId).toBeDefined()
                    expect(columns.rowId).toBeDefined()
                    expect(columns.color).toBeDefined()
                })
            })
        })
    })

    describe('Board creation', () => {
        test('isOdd method is functional', () => {
            expect(isOdd(0)).toBeFalsy()
            expect(isOdd(1)).toBeTruthy()
        })
        test('calcColor method is functional', () => {
            expect(calcColor('a', 0)).toBe('black')
            expect(calcColor('b', 1)).toBe('black')
            expect(calcColor('a', 1)).toBe('white')
            expect(calcColor('b', 0)).toBe('white')
        })
    })

    describe('Piece setup', () => {
        describe('getStartingRowIds', () => {
            test('when given type pawn', () => {
                const rowIds = getStartingRowIds('pawn')

                expect(rowIds).toHaveProperty('white', 2)
                expect(rowIds).toHaveProperty('black', 7)
            })

            test('when given type of anything else', () => {
                const rowIds = getStartingRowIds('anything_else')

                expect(rowIds).toHaveProperty('white', 1)
                expect(rowIds).toHaveProperty('black', 8)
            })
        })
        describe('getColumnIdByIndexes', () => {
            test('when given undefined, return all column ids', () => {
                expect(getColumnIdByIndexes(undefined)).toHaveLength(8)
            })

            test('when given an array, return those column ids', () => {
                const columnIds = getColumnIdByIndexes([0, 1])

                expect(columnIds).toHaveLength(2)
                expect(columnIds[0]).toBe('a')
                expect(columnIds[1]).toBe('b')
            })
        })
        describe('filterPiecesForPlayer', () => {
            test('when filtering for all of a players pieces', () => {
                expect(filterPiecesForPlayer(pieces, 'white')).toHaveLength(16)
            })

            test('when filtering for specific piece types', () => {
                expect(filterPiecesForPlayer(pieces, 'white', 'pawn')).toHaveLength(8)
                expect(filterPiecesForPlayer(pieces, 'black', 'rook')).toHaveLength(2)
                expect(filterPiecesForPlayer(pieces, 'white', 'queen')).toHaveLength(1)
            })
        })
    })
})
