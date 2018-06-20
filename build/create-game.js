'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var pieces = (0, _createPieces2.default)(players);
    var board = (0, _createBoard2.default)(players, pieces);

    (0, _setPiecesOnBoard2.default)(players, pieces, board);

    return {
        turn: 0, // Will alternate between 0 and 1 based on white and black
        turnCount: 0,
        players: players,
        pieces: pieces,
        board: board
    };
};

var _createBoard = require('./lib/create-board.js');

var _createBoard2 = _interopRequireDefault(_createBoard);

var _createPieces = require('./lib/create-pieces.js');

var _createPieces2 = _interopRequireDefault(_createPieces);

var _setPiecesOnBoard = require('./lib/set-pieces-on-board.js');

var _setPiecesOnBoard2 = _interopRequireDefault(_setPiecesOnBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var players = [{
    id: 0,
    tag: 'Player 1',
    color: 'white'
}, {
    id: 1,
    tag: 'Player 2',
    color: 'black'
}];