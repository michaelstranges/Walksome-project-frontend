import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/nav-bar.css';

export default class NavBar extends Component {
  render(){

  return (
      <nav className="navbar">
        <img src={logo} className="Nav-logo" alt="logo" />

          <form>
            <label>
              Username:
              <input type="text" name="username" placeholder="user" />
              Password:
              <input type="text" name="password" placeholder="password" />
            </label>
            <input type="submit" value="Submit" />            
          </form>



        <submit/>
      </nav>
    );
  }
}
