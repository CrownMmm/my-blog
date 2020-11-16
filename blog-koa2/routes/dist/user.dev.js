"use strict";

var router = require('koa-router')();

router.prefix('/api/user');
router.post('/login', function _callee(ctx, next) {
  var _ctx$request$body, username, password;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
          ctx.body = {
            errno: 0,
            username: username,
            password: password
          };

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;