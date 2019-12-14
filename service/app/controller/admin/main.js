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
        status: 200,
        message: '登录成功',
        openId: openId
      }
    } else {
      ctx.body = {
        status: 400,
        message: '登录失败'
      }
    }
  }

  // 后台文章分类信息
  async getTypeInfo () {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = { data: resType }
  }

  // 添加文章
  async addArticle () {
    let tmpArticle = this.ctx.request.body
    console.log(tmpArticle)
    const result = await this.app.mysql.insert('article', tmpArticle)
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId

    this.ctx.body = {
      insertSuccess: insertSuccess,
      insertId: insertId
    }
  }
}

module.exports = MainController
