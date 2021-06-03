import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupActions'
import * as flashActions from '../../actions/flashMessages'

class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {/* 因为要使用signupActions 里面定义的axios， 所以传过去 */}
          <SignupForm
            signupActions={this.props.signupActions}
            flashActions={this.props.flashActions}
          />
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //  bindActionCreators 里面就放 dispatch 和 actions 的合集： 产生新的函数signupActions： 作用： 预先改变
    // bindActionCreators 第一个参数， 把整个actionCreater文件包裹住。
    signupActions: bindActionCreators(signupActions, dispatch),
    // flashActions 是一个对象， 要调用还需要flashActions. addFlashMessage
    flashActions: bindActionCreators(flashActions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(SignupPage)
