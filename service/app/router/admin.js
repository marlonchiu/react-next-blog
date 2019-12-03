'use strict'

module.exports = app => {
  const { router, controller } = app
  const adminAuth = app.middleware.adminAuth()
  router.get('/admin/index', controller.admin.main.index)
  router.post('/admin/checkLogin', adminAuth, controller.admin.main.checkLogin)
}
