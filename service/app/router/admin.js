'use strict'

module.exports = app => {
  const { router, controller, middleware } = app
  const adminAuth = middleware.adminAuth()
  
  router.get('/admin/index', controller.admin.main.index)
  router.post('/admin/checkLogin', adminAuth, controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo', adminAuth, controller.admin.main.getTypeInfo)
}
