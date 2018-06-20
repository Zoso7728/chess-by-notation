'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (players, pieces, board) {
    console.log('Setting pieces on the board...');

    board.forEach(function (row, rowId) {
        setUp.pawns(row, rowId, pieces);
        setUp.rooks(row, rowId, pieces);
        setUp.knights(row, rowId, pieces);
        setUp.bishops(row, rowId, pieces);
        setUp.queens(row, rowId, pieces);
        setUp.kings(row, rowId, pieces);
    });
};

var _util = require('../util.js');

var WHITE_POWER_ROW_ID = 0;
var WHITE_PAWN_ROW_ID = 1;
var BLACK_POWER_ROW_ID = 7;
var BLACK_PAWN_ROW_ID = 6;

var isRowForPawns = function isRowForPawns(rowId) {
    return rowId === WHITE_PAWN_ROW_ID || rowId === BLACK_PAWN_ROW_ID;
};
var isRowForPowerPieces = function isRowForPowerPieces(rowId) {
    return rowId === WHITE_POWER_ROW_ID || rowId === BLACK_POWER_ROW_ID;
};

var getRelevantColumns = function getRelevantColumns(row, indexes) {
    return indexes.map(function (i) {
        return row[i];
    });
};

var set = function set(row, rowId, pieces) {
    row.forEach(function (_ref, key) {
        var columnId = _ref.columnId;

        pieces[key].position = '' + columnId + (rowId + 1);
    });
};

var setUp = {
    pawns: function pawns(row, rowId, pieces) {
        if (!isRowForPawns(rowId)) return;

        var pawns = (0, _util.getByType)(pieces, 'pawn');

        if (rowId === WHITE_PAWN_ROW_ID) set(row, rowId, (0, _util.getByColor)(pawns, 'white'));
        if (rowId === BLACK_PAWN_ROW_ID) set(row, rowId, (0, _util.getByColor)(pawns, 'black'));
    },
    rooks: function rooks(row, rowId, pieces) {
        if (!isRowForPowerPieces(rowId)) return;

        var rooks = (0, _util.getByType)(pieces, 'rook');

        var indexes = [0, 7];
        var relevantTiles = getRelevantColumns(row, indexes);

        if (rowId === WHITE_POWER_ROW_ID) set(relevantTiles, rowId, (0, _util.getByColor)(rooks, 'white'));
        if (rowId === BLACK_POWER_ROW_ID) set(relevantTiles, rowId, (0, _util.getByColor)(rooks, 'black'));
    },
    knights: function knights(row, rowId, pieces) {
        if (!isRowForPowerPieces(rowId)) return;

        var knights = (0, _util.getByType)(pieces, 'knight');

        var indexes = [1, 6];
        var relevantTiles = getRelevantColumns(row, indexes);

        if (rowId === WHITE_POWER_ROW_ID) set(relevantTiles, rowId, (0, _util.getByColor)(knights, 'white'));
        if (rowId === BLACK_POWER_ROW_ID) set(relevantTiles, rowId, (0, _util.getByColor)(knights, 'black'));
    },
    bishops: function bishops(row, rowId, pieces) {
        if (!isRowForPowerPieces(rowId)) return;

        var bishops = (0, _util.getByType)(pieces, 'bishop');

        var indexes = [2, 5];
        var relevantTiles = getRelevantColumns(row, indexes);

        if (rowId === WHITE_POWER_ROW_ID) set(relevantTiles, rowId, (0, _util.getByColor)(bishops, 'white'));
        if (rowId === BLACK_POWER_ROW_ID) set(relevantTiles, rowId, (0, _util.getByColor)(bishops, 'black'));
    },
    queens: function queens(row, rowId, pieces) {
        if (!isRowForPowerPieces(rowId)) return;

        var queens = (0, _util.getByType)(pieces, 'queen');

        var indexes = [3, 4];
        var relevantTiles = getRelevantColumns(row, indexes);

        // Queen always gets her color
        if (rowId === WHITE_POWER_ROW_ID) {
            var color = 'white';
            set((0, _util.getByColor)(relevantTiles, color), rowId, (0, _util.getByColor)(queens, color));
        }

        if (rowId === BLACK_POWER_ROW_ID) {
            var _color = 'black';
            set((0, _util.getByColor)(relevantTiles, _color), rowId, (0, _util.getByColor)(queens, _color));
        }
    },
    kings: function kings(row, rowId, pieces) {
        if (!isRowForPowerPieces(rowId)) return;

        var kings = (0, _util.getByType)(pieces, 'king');

        var indexes = [3, 4];
        var relevantTiles = getRelevantColumns(row, indexes);

        // King gets opposite color
        if (rowId === WHITE_POWER_ROW_ID) {
            set((0, _util.getByColor)(relevantTiles, 'black'), rowId, (0, _util.getByColor)(kings, 'white'));
        }

        if (rowId === BLACK_POWER_ROW_ID) {
            set((0, _util.getByColor)(relevantTiles, 'white'), rowId, (0, _util.getByColor)(kings, 'black'));
        }
    }
};