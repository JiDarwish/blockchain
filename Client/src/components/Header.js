import React, { Component } from 'react'
import '../styles/header.css';

import imgUrl from '../images/logo.png'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg blockchain-navbar">
        <div className="container">
          <img src={imgUrl} alt="logo" style={{ filter: "invert(100%)" }} />
          <h1 className="pageTitle">TrainOps - Supply chain monitoring</h1>
        </div>
      </nav>
    )
  }
}
