import React, { Component } from 'react'
import FlashMessageList from '../components/flash/FlashMessageList'

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <FlashMessageList></FlashMessageList>
        <h1>here for login</h1>
      </div>
    )
  }
}

export default App
