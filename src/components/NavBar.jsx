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
          <div className="all-nav-bar-links">
            <a className="nav-bar-link" href="http://localhost:3000/walk/1">Spadina Path</a>
            <a className="nav-bar-link" href="http://localhost:3000/walk/2">Dufferin Path</a>
            <a className="nav-bar-link" href="http://localhost:3000/walk/3">Lakeshore Path</a>
            <a className="nav-bar-link" href="#">Unnamed Path</a>
          </div>
      </nav>
    );
  }
}
