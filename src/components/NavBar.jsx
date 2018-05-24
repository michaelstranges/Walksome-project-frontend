import React, {Component} from 'react';
import shoes from '../running-shoes.svg';
import '../styles/nav-bar.css';

export default class NavBar extends Component {
  render(){

  return (
      <nav className="navbar">
        <img src={shoes} className="Nav-shoe" alt="logo" />
        <div className="app-name"> WALKSOME </div>
          <div className="all-nav-bar-links">
            <a className="nav-bar-link" href="http://localhost:3000/walk/1">Harbourfront Path</a>
            <a className="nav-bar-link" href="http://localhost:3000/walk/2">Bremner-Fort York Path</a>
            <a className="nav-bar-link" href="http://localhost:3000/walk/3">Sugar Beach</a>
            <a className="nav-bar-link" href="http://localhost:3000/walk/4">High Park Path</a>
          </div>
      </nav>
    );
  }
}
