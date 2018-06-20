'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (players) {
    console.log('Creating pieces...');

    var pieces = [];
    var pieceId = 0;

    // Players
    for (var i = 0; i < players.length; i++) {

        // Types
        for (var j = 0; j < types.length; j++) {
            var _types$j = types[j],
                type = _types$j.name,
                count = _types$j.count;

            // Pieces

            for (var l = 0; l < count; l++) {
                pieces.push({
                    pieceId: pieceId++,
                    color: !i ? 'white' : 'black',
                    type: type,
                    position: null, // columnId + rowId
                    captured: false
                });
            }
        }
    }

    return pieces;
};

var types = [{
    name: 'pawn',
    count: 8
}, {
    name: 'rook',
    count: 2
}, {
    name: 'knight',
    count: 2
}, {
    name: 'bishop',
    count: 2
}, {
    name: 'queen',
    count: 1
}, {
    name: 'king',
    count: 1
}];