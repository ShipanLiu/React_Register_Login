import React, { Component } from 'react'
import classnames from 'classnames'

export default class FlashMessage extends Component {
  render() {
    //this.props.message 从何而来？
    const { type, text } = this.props.message

    // 删除客户的操作： 需要有相应的action
    onclick = () => {
      this.props.deleteFlashMessage(this.props.message.id)
      console.log('test')
    }
    return (
      <div
        className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'danger',
        })}
      >
        {text}
        <button onClick={this.onclick} className="close">
          &times;
        </button>
      </div>
    )
  }
}
