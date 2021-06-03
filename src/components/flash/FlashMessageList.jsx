/*
 这个模块的功能：  注册几个

关联 redux
*/

import React, { Component } from 'react'
import FlashMessage from './FlashMessage'
import { connect } from 'react-redux'
import { deleteFlashMessage } from '../../actions/flashMessages'
// import * as flashActions from '../../actions/flashMessages'

class FlashMessageList extends Component {
  // message要存在redux里面。
  //  message是一个数组！

  render() {
    const userInfos = this.props.message.map((messageObj) => (
      <FlashMessage
        key={messageObj.id}
        message={messageObj}
        deleteFlashMessage={this.props.deleteFlashMessage}
      ></FlashMessage>
    ))
    return <div className="container">{userInfos}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    // read the defaultstate under flashMessageRedeucer
    // so the message is already added in this.props
    message: state.flashMessageRedeucer,
  }
}

// 所以不一定要写 const mapDispatchToProps ， 直接把action 放在connect里面。
export default connect(mapStateToProps, { deleteFlashMessage })(
  FlashMessageList
)
