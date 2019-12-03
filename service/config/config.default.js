/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570765756017_9506';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置数据库
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'react_blog'
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  // 配置跨域
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  }
  config.cors = {
    origin: 'http://localhost:3000',
    credentials: true, // 允许跨域
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS, UPDATE'
  }

  return {
    ...config,
    ...userConfig,
  };
};
