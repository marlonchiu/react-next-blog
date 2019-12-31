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
      isSuccess: insertSuccess,
      data: {
        insertId: insertId
      }
    }
  }

  // 更新文章
  async updateArticle () {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.update('article', tmpArticle)
    const updateSuccess = result.affectedRows === 1
    console.log(updateSuccess)

    this.ctx.body = {
      isSuccess: updateSuccess
    }
  }

  // 获取文章列表
  async getArticleList () {
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.view_count as view_count,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'ORDER BY article.id DESC '

    const dataList = await this.app.mysql.query(sql)

    this.ctx.body = {
      list: dataList
    }
  }

  // 删除文章
  async deleteArticle () {
    const id = this.ctx.params.id
    const res = await this.app.mysql.delete('article', { 'id': id })
    this.ctx.body = {
      data: res
    }
  }

  // 根据文章ID得到文章详情，用于修改文章
  async getArticleById () {
    const id = this.ctx.params.id

    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.content as content,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName, ' +
      'type.id as type_id ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'WHERE article.id = ' + id

    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result
    }
  }
}

module.exports = MainController
