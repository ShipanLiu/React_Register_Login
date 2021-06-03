const express = require('express')
const app = express()
const user = require('./routers/user')
const bodyParser = require('body-parser')

// body-parser 是一个函数， 相当于中间件， 没有写路径， 匹配任何
// parse application/x-www-form-urlencoded, bodyParser 专门用来处理前端发来的表单数据。
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

//静态资源服务middleware
app.use(express.static('./public'))

// use Routers
app.use('/api/users', user)


app.listen(3030, (req, res) => {
  console.log('port 3030 is listening...');
})