'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app
    } = this
    // const result = await app.mysql.get('blog_content', {})
    // console.log(result)
    // ctx.body = result;
    ctx.body = 'default api 接口';
  }

  // 获取文章列表
  async getArticleList() {
    const {
      ctx,
      app
    } = this

    const sql =
      'SELECT article.id as id, ' +
      'article.title as title, ' +
      'article.introduce as introduce, ' +
      "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s') as addTime, " +
      'article.view_count as view_count, ' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id'

    const results = await app.mysql.query(sql)
    ctx.body = {
      data: results
    }
  }

  // 获取文章详情
  async getArticleById() {
    const {
      ctx,
      app
    } = this
    // 先配置路由的动态传值，然后再接收值
    const articleId = ctx.params.id

    const sqlDetail =
      'SELECT article.id as id, ' +
      'article.title as title, ' +
      'article.introduce as introduce, ' +
      'article.content as content, ' +
      "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s') as addTime, " +
      'article.view_count as view_count, ' +
      'type.typeName as typeName, ' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'WHERE article.id=' + articleId

    const result = await app.mysql.query(sqlDetail)
    ctx.body = {
      data: result
    }
  }
}

module.exports = HomeController
