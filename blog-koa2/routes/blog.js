const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', function (ctx, next) {
  const query =ctx.query
  ctx.body = {
    errno: 0,
    data: ['获取博客列表'],
    query
  }
})


module.exports = router
