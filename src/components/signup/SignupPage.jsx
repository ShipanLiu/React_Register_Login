import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignupRequest } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages'

class SignupPage extends Component {
  render() {
    // console.log(this.props.message)
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm
            userSignupRequest={this.props.userSignupRequest}
            addFlashMessage={this.props.addFlashMessage}
          />
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // read the defaultstate under flashMessageRedeucer
    // so the message is already added in this.props
    message: state.flashMessageRedeucer,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //  bindActionCreators 里面就放 dispatch 和 actions 的合集： 产生新的函数signupActions： 作用： 预先改变
//     // bindActionCreators 第一个参数， 把整个actionCreater文件包裹住。
//     signupActions: bindActionCreators(signupActions, dispatch),
//     // flashActions 是一个对象， 要调用还需要flashActions. addFlashMessage
//     flashActions: bindActionCreators(flashActions, dispatch),
//   }
// }

export default connect(mapStateToProps, {
  addFlashMessage,
  userSignupRequest,
})(SignupPage)
