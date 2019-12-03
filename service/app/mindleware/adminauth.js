// 实现中台路由守卫

module.exports = options => {
  return async function adminAuth (ctx, next) {
    console.log(ctx.session.openId)
    if (ctx.session.openId) {
      await next()
    } else {
      ctx.body = {
        status: 400,
        message: '没有登录'
      }
    }
  }
}
