// 前端发过来密码啥的，需要验证一下。

const express = require('express')
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const router = express.Router()
// const sqlFn = require('../mysql/index')
const mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'jiba1',
})

const validatorInput = (data) => {
  let errors = {}
  if (validator.isEmpty(data.username)) {
    errors.username = 'no username'
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'no email'
  }
  if (validator.isEmpty(data.pwd)) {
    errors.pwd = 'no pwd'
  }
  if (validator.isEmpty(data.pwdAgain)) {
    errors.pwdAgain = 'no pwdAgain'
  }
  if (!validator.equals(data.pwd, data.pwdAgain)) {
    errors.pwdEqual = 'pwd not equal'
  }

  return {
    errors,
    //  error是否存在
    isValid: isEmpty(errors),
  }
}

router.post('/', (req, res, next) => {
  console.log(req.body)
  const { errors, isValid } = validatorInput(req.body)

  // if (isValid) {
  //   con.connect(function (err) {
  //     if (err) throw err
  //     console.log('Connected!')
  //     var sql = 'INSERT INTO student1 (username, email, pwd, pwdAgain) VALUES ?'
  //     var values = [
  //       [req.body.username, req.body.email, req.body.pwd, req.body.pwdAgain],
  //     ]
  //     con.query(sql, [values], function (err, result) {
  //       if (err) throw err
  //       console.log('Number of records inserted: ' + result.affectedRows)
  //     })
  //   })

  //   res.status(200).send({ success: true })
  //   res.end
  // } else {
  //   res.status(400).json(errors)
  //   res.end
  // }
  if (isValid) {
    res.status(200).json({ success: true })
  } else {
    res.status(400).send('failed')
  }
})

module.exports = router
