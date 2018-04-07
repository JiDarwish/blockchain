import React, { Component } from 'react'
import '../styles/header.css';

import imgUrl from '../images/logo.png'

export default class Header extends Component {
  render() {
    return (
     <nav className="navbar navbar-expand-lg blockchain-navbar">
     <div className="container">
     <img src={imgUrl} style={{filter: "invert(100%)"}}/>
  <a href="#">Navbar</a>
  </div>
  </nav>
    )
  }
}
