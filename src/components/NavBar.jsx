/*
  navbar 是一直存在的， 放在index里卖弄routes上面
*/

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
