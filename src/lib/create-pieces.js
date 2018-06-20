const types = [
    {
        name: 'pawn',
        count: 8,
        value: 1,
    },
    {
        name: 'rook',
        count: 2,
        value: 5,
    },
    {
        name: 'knight',
        count: 2,
        value: 3,
    },
    {
        name: 'bishop',
        count: 2,
        value: 3,
    },
    {
        name: 'queen',
        count: 1,
        value: 9,
    },
    {
        name: 'king',
        count: 1,
        value: 0,
    },
]

export default function(players) {
    console.log('Creating pieces...')

    const pieces = []
    let pieceId = 0

    // Players
    for(let i = 0; i < players.length; i++) {

        // Types
        for(let j = 0; j < types.length; j ++) {
            const { name: type, count, value } = types[j]

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
