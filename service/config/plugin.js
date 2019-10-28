'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
// 配置数据库插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};

// 配置支持跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
