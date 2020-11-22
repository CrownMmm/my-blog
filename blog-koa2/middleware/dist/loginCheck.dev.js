"use strict";

var _require = require('../model/resModel'),
    ErrorModel = _require.ErrorModel;

module.exports = function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.session.username) {
            _context.next = 4;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(next());

        case 3:
          return _context.abrupt("return");

        case 4:
          ctx.body = new ErrorModel('未登录');

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};