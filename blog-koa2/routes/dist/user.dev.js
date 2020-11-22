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
router.get('/session-test', function _callee2(ctx, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (ctx.session.viewCount == null) {
            ctx.session.viewCount = 0;
          }

          ctx.session.viewCount++;
          ctx.body = {
            errno: 0,
            viewCount: ctx.session.viewCount
          };

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;