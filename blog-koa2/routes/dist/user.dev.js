"use strict";

var router = require('koa-router')();

var _require = require('../controller/user'),
    login = _require.login;

var _require2 = require('../model/resModel'),
    SuccessModel = _require2.SuccessModel,
    ErrorModel = _require2.ErrorModel;

router.prefix('/api/user');
router.post('/login', function _callee(ctx, next) {
  var _ctx$request$body, username, password, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(login(username, password));

        case 3:
          data = _context.sent;

          if (!data.username) {
            _context.next = 9;
            break;
          }

          // 设置 session
          ctx.session.username = data.username;
          ctx.session.realname = data.realname;
          ctx.body = new SuccessModel();
          return _context.abrupt("return");

        case 9:
          ctx.body = new ErrorModel('登录失败');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}); // router.get('/session-test', async function (ctx, next) {
//   if (ctx.session.viewCount == null) {
//     ctx.session.viewCount = 0
//   }
//   ctx.session.viewCount++
//   ctx.body ={
//     errno: 0,
//     viewCount: ctx.session.viewCount
//   }
// })

module.exports = router;