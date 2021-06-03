import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

import routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import FlashMessageList from './components/flash/FlashMessageList'

// need a reducer, createStore's 2ed param have involve the middlewares
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <NavBar></NavBar>
      <FlashMessageList></FlashMessageList>
      {routes}
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
)
