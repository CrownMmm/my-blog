const { ErrorModel } = require('../model/resModel')

module.exports = async (req, res, next) => {
  if (req.session.username) {
    await next()
    return
  }
  ctx.body = new ErrorModel('未登录')
}