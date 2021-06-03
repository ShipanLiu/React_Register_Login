// yarn add react-router-dom -S

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import SignupPage from './components/signup/SignupPage'

export default(
  <div className='container'>
    <Switch>
      <Route path='/' exact component= { App }></Route>
      <Route path='/signup' component= { SignupPage }></Route>
    </Switch>
  </div>
)