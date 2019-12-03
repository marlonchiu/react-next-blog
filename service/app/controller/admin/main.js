'use strict'

const Controller = require('egg').Controller

class MainController extends Controller {
  async index () {
    const { ctx } = this
    ctx.body = 'hi, admin api'
  }

  // 判断用户名密码是否正确
  async checkLogin () {
    const { ctx, app } = this
    const { request, session } = ctx

    const userName = request.body.userName
    const password = request.body.password
    const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName + "' AND password = '" + password + "'"
    const result = await app.mysql.query(sql)

    if (result.length > 0) {
      // 登录成功 进行session缓存
      const openId = new Date().getTime()
      session.openId = { openId: openId }
      ctx.body = {
        data: '登录成功',
        openId: openId
      }
    } else {
      ctx.body = { data: '登录失败' }
    }
  }
}

module.exports = MainController
