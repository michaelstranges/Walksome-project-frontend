import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import logo from '../logo.svg';

class UserProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Mike",
      description: "An avid walker and Toronto fan",
      completed: ["King", "Queen", "Bathurst", "Lakeshore", "Yonge", "Bay"]
    }
  }

//.map doesn't seem to be able to break.  But the concept is in place.
//maybe try a for-loop.
  render() {
  let i = 0;
  const completedlist = this.state.completed.map((route_names) => {
    i++;
    if (this.state.completed.length > 4) {
        if ( i < 4){
          console.log("AAAA", i)
            return (<div> {route_names}  </div>)
        } else {
          console.log("BBBB", i)
            return (<div> {route_names} and {this.state.completed.length - 4} others </div>)

        }
    }
  })

    return (
      <div>
        <aside className = "profile-sidebar">
            <div className="user-profile-info">
              <div>The User Profile Page</div>
              <img src={logo} className="user-profile-pic" alt="logo" />
              <div className="user-profile-name">{this.state.name}</div>
              <div className="user-profile-description">{this.state.description}</div>
              <div className="user-profile-walks">{completedlist}</div>
           </div>
        </aside>
      </div>
    )
  }
}

export default UserProfilePage
