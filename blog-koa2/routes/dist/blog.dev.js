"use strict";

var router = require('koa-router')();

var _require = require('../controller/blog'),
    getList = _require.getList,
    getDetail = _require.getDetail,
    newBlog = _require.newBlog,
    updateBlog = _require.updateBlog,
    delBlog = _require.delBlog;

var _require2 = require('../model/resModel'),
    SuccessModel = _require2.SuccessModel,
    ErrorModel = _require2.ErrorModel;

var loginCheck = require('../middleware/loginCheck');

router.prefix('/api/blog');
router.get('/list', function _callee(ctx, next) {
  var author, keyword, listData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          author = ctx.query.author || '';
          keyword = ctx.query.keyword || '';

          if (!ctx.query.isadmin) {
            _context.next = 9;
            break;
          }

          console.log('is admin'); // 管理员界面

          if (!(ctx.session.username == null)) {
            _context.next = 8;
            break;
          }

          console.error('is admin, but no login'); // 未登录

          ctx.body = new ErrorModel('未登录');
          return _context.abrupt("return");

        case 8:
          // 强制查询自己的博客
          author = ctx.session.username;

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(getList(author, keyword));

        case 11:
          listData = _context.sent;
          ctx.body = new SuccessModel(listData);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/detail', function _callee2(ctx, next) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getDetail(ctx.query.id));

        case 2:
          data = _context2.sent;
          ctx.body = new SuccessModel(data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.post('/new', loginCheck, function _callee3(ctx, next) {
  var body, data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          body = ctx.request.body;
          body.author = ctx.session.username;
          _context3.next = 4;
          return regeneratorRuntime.awrap(newBlog(body));

        case 4:
          data = _context3.sent;
          ctx.body = new SuccessModel(data);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.post('/update', loginCheck, function _callee4(ctx, next) {
  var val;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(updateBlog(ctx.query.id, ctx.request.body));

        case 2:
          val = _context4.sent;

          if (val) {
            ctx.body = new SuccessModel();
          } else {
            ctx.body = new ErrorModel('更新博客失败');
          }

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.post('/del', loginCheck, function _callee5(ctx, next) {
  var author, val;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          author = ctx.session.username;
          _context5.next = 3;
          return regeneratorRuntime.awrap(delBlog(ctx.query.id, author));

        case 3:
          val = _context5.sent;

          if (val) {
            ctx.body = new SuccessModel();
          } else {
            ctx.body = new ErrorModel('删除博客失败');
          }

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;