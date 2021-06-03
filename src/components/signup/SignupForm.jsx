/*
  成功或者失败的时候， 向redux 里面提交数据。

*/

import React, { Component } from 'react'
// 快速处理样式
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'

class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    pwd: '',
    pwdAgain: '',
    errors: {},
    isLoading: false,
    id: '',
  }

  // 注意
  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    })
  }

  onSubmit = (e) => {
    // 知识点： 节流和防抖， 回流 和重绘
    //阻止默认事件
    e.preventDefault()
    console.log(this.state)
    // change the isLoading state
    this.setState({ errors: {}, isLoading: true })
    // 更改redux里面储存的东西。
    // this.props.userSignupRequest(this.state)
    this.props
      .userSignupRequest(this.state)
      .then(() => {
        // 把信息存到redux里面
        this.props.addFlashMessage({
          type: 'success',
          text: 'welcome to us!',
        })
        //成功, 但是我们不需要返回的数据, 直接跳转到登陆页面。
        this.props.history.push('/', { from: '/signup' })
      })
      // 我门要把错误的数据显示出来。
      .catch(({ response }) => {
        // 把信息存到redux里面
        // this.props.flashActions.addFlashMessage({
        //   type: 'danger',
        //   text: 'something went wrong, try again!',
        // })
        // console.log(response)
        // 把返回来到 err弄到state里面
        this.setState({ errors: response.data, isLoading: false })
      })
  }

  render() {
    // console.log(this.state.errors)
    console.log(this.props)
    const { errors, isLoading } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            // className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Username"
            onChange={this.onChange}
            // 第一个是正常的， 第二个判断。
            className={classnames('form-control', {
              'is-invalid': errors.username,
            })}
          ></input>
          {/* 如果username 错误存在。。。 */}
          {errors.username && (
            <span className="form-text text-danger "> {errors.username}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            // className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={this.onChange}
            className={classnames('form-control', {
              'is-invalid': errors.email,
            })}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {errors.email && (
            <span className="form-text text-danger "> {errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            // className="form-control"
            id="pwd"
            placeholder="Password"
            onChange={this.onChange}
            className={classnames('form-control', {
              'is-invalid': errors.pwd,
            })}
          ></input>
          {errors.pwd && (
            <span className="form-text text-danger "> {errors.pwd}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password again</label>
          <input
            type="password"
            // className="form-control"
            id="pwdAgain"
            placeholder="Password"
            onChange={this.onChange}
            className={classnames('form-control', {
              'is-invalid': errors.pwdAgain,
            })}
          ></input>
          {errors.pwdAgain && (
            <span className="form-text text-danger "> {errors.pwdAgain}</span>
          )}
        </div>
        {errors.pwdEqual && (
          <span className="form-text text-danger"> {errors.pwdEqual}</span>
        )}
        {/* <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
    )
  }
}

export default withRouter(SignupForm)
