import React, {Component} from 'react';
import logo from '../logo.svg';
import shoes from '../running-shoes.svg';
import '../styles/nav-bar.css';

export default class NavBar extends Component {
  render(){

  return (
      <nav className="navbar">
        <img src={shoes} className="Nav-shoe" alt="logo" />

        <div className="app-name"> WALKSOME </div>
      </nav>
    );
  }
}
