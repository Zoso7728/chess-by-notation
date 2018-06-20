'use strict';

var _createGame = require('./create-game.js');

var _createGame2 = _interopRequireDefault(_createGame);

var _takeTurn = require('./take-turn.js');

var _takeTurn2 = _interopRequireDefault(_takeTurn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var game, turn, turnCount;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    game = (0, _createGame2.default)();
                    turn = 0;
                    turnCount = 0;


                    console.log('Ready to begin!');
                    console.log('Notation example: d2-d4');

                case 6:
                    if (!(turnCount < 10)) {
                        _context.next = 13;
                        break;
                    }

                    _context.next = 9;
                    return (0, _takeTurn2.default)(turn, turnCount, game);

                case 9:

                    turn = !turn ? 1 : 0;
                    turnCount++;
                    _context.next = 6;
                    break;

                case 13:

                    console.log('Game Over!');
                    _context.next = 19;
                    break;

                case 16:
                    _context.prev = 16;
                    _context.t0 = _context['catch'](0);

                    console.log(_context.t0);

                case 19:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[0, 16]]);
}))();