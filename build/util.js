'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvailablePieces = exports.getByType = exports.getByColor = undefined;

var _lodash = require('lodash');

var getByColor = exports.getByColor = function getByColor(arrOfObjs, color) {
  return (0, _lodash.filter)(arrOfObjs, { color: color });
};
var getByType = exports.getByType = function getByType(arrOfObjs, type) {
  return (0, _lodash.filter)(arrOfObjs, { type: type });
};
var getAvailablePieces = exports.getAvailablePieces = function getAvailablePieces(pieces) {
  return (0, _lodash.filter)(pieces, { captured: false });
};