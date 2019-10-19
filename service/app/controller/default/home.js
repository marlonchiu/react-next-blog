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

  async getArticleList () {
    const { ctx, app } = this

    const sql = 'SELECT article.id as id, ' +
                'article.title as title, ' +
                'article.introduce as introduce, ' +
                'article.addTime as addTime, ' +
                'article.view_count as view_count, ' +
                'type.typeName as typeName ' +
                'FROM article LEFT JOIN type ON article.type_id = type.id'

    const results = await app.mysql.query(sql)
    ctx.body = {
      data: results
    }
  }
}

module.exports = HomeController
