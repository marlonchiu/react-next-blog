'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app
    } = this
    const result = await app.mysql.get('blog_content', {})
    console.log(result)
    ctx.body = result;
    // ctx.body = 'default api 接口';
  }
}

module.exports = HomeController
