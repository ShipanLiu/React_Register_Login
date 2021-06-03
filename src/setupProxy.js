// 解决跨域的问题, you have to install http-proxy-middleware
// 这个中间件 不用再其他文件导入， 自动就注入了路由。
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3030',
      changeOrigin: true,
    })
  )
}
