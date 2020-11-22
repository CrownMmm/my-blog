"use strict";

var Koa = require('koa');

var app = new Koa();

var views = require('koa-views');

var json = require('koa-json');

var onerror = require('koa-onerror');

var bodyparser = require('koa-bodyparser');

var logger = require('koa-logger');

var session = require('koa-generic-session');

var redisStore = require('koa-redis');

var index = require('./routes/index');

var users = require('./routes/users');

var blog = require('./routes/blog');

var user = require('./routes/user'); // error handler


onerror(app); // middlewares

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(views(__dirname + '/views', {
  extension: 'pug'
})); // logger

app.use(function _callee(ctx, next) {
  var start, ms;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start = new Date();
          _context.next = 3;
          return regeneratorRuntime.awrap(next());

        case 3:
          ms = new Date() - start;
          console.log("".concat(ctx.method, " ").concat(ctx.url, " - ").concat(ms, "ms"));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // session 配置

app.keys = ['WJiol#23123_'];
app.use(session({
  // 配置 cookie
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  // 配置 redis
  store: redisStore({
    all: '127.0.0.1:6379' // 写死本地的 redis
    // all: `${REDIS_CONF.host}:${REDIS_CONF.port}`

  })
})); // routes

app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(blog.routes(), blog.allowedMethods());
app.use(user.routes(), user.allowedMethods()); // error-handling

app.on('error', function (err, ctx) {
  console.error('server error', err, ctx);
});
module.exports = app;