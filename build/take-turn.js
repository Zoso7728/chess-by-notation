'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _lodash = require('lodash');

var _util = require('./util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var NOTATION_REGEX = /^([a-h]?[1-9]?]*)-([a-h]?[1-9]?]*)/;
var extractNotation = function extractNotation(input) {
    return NOTATION_REGEX.exec(input);
};

var requestNotation = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2, pieces) {
        var playerTag = _ref2.tag,
            color = _ref2.color;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', _inquirer2.default.prompt([{
                            type: 'input',
                            name: 'notation',
                            message: playerTag + ' (' + color + ')',
                            validate: function validate(input) {
                                if (!NOTATION_REGEX.test(input)) return 'Incorrect syntax! Example: a2-a3';

                                var _extractNotation = extractNotation(input),
                                    _extractNotation2 = _slicedToArray(_extractNotation, 3),
                                    inputDup = _extractNotation2[0],
                                    from = _extractNotation2[1],
                                    to = _extractNotation2[2]; // eslint-disable-line

                                var piecesByColor = (0, _util.getByColor)(pieces, color);
                                var availablePieces = (0, _util.getAvailablePieces)(piecesByColor);
                                var pieceToMove = availablePieces.filter(function (piece) {
                                    return from.includes(piece.position);
                                });

                                if ((0, _lodash.isEmpty)(pieceToMove)) return from + ' does not contain a movable piece for ' + color;

                                return true;
                            }
                        }]));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function requestNotation(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(turn, turnCount, game) {
        var player, _ref4, notation, _NOTATION_REGEX$exec, _NOTATION_REGEX$exec2, input, from, to;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        player = game.players[turn];
                        _context2.next = 3;
                        return requestNotation(player, game.pieces);

                    case 3:
                        _ref4 = _context2.sent;
                        notation = _ref4.notation;
                        _NOTATION_REGEX$exec = NOTATION_REGEX.exec(notation), _NOTATION_REGEX$exec2 = _slicedToArray(_NOTATION_REGEX$exec, 3), input = _NOTATION_REGEX$exec2[0], from = _NOTATION_REGEX$exec2[1], to = _NOTATION_REGEX$exec2[2]; // eslint-disable-line

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();