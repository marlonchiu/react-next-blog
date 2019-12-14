// 实现中台路由守卫
'use strict'

module.exports = () => {
  return async function adminAuth (ctx, next) {
    console.log(ctx.session.openId)
    if (ctx.session.openId) {
      await next()
    } else {
      ctx.body = {
        status: 403,
        message: '没有登录'
      }
    }
  }
}
