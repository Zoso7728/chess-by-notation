const types = [
    {
        name: 'pawn',
        count: 8,
    },
    {
        name: 'rook',
        count: 2,
    },
    {
        name: 'knight',
        count: 2,
    },
    {
        name: 'bishop',
        count: 2,
    },
    {
        name: 'queen',
        count: 1,
    },
    {
        name: 'king',
        count: 1,
    },
]


export default function(players) {
    const pieces = []
    let pieceId = 0

    // Players
    for(let i = 0; i < players.length; i++) {

        // Types
        for(let j = 0; j < types.length; j ++) {
            const { name: type, count } = types[j]

            // Pieces
            for(let l = 0; l < count; l++) {
                pieces.push({
                    pieceId: pieceId++,
                    color: !i ? 'white' : 'black',
                    type,
                    position: 'columnId + rowId',
                    movement: 'function for determining available tiles to move to',
                    threatenedBy: ['pieceIds'],
                    threatening: ['pieceIds'],
                })
            }
        }
    }

    return pieces
}
