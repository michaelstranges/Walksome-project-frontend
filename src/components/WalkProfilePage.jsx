import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

//map child component
import WalkMapContainer from './WalkMapContainer.jsx'
import WalkMapDirections from './WalkMapDirections.jsx'
import WalkCommentList from './WalkCommentList.jsx'

class WalkProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Spadina",
      description: "an OK walk",
      walk_time: 4,
      comments: [
        {name: "John", rating: 4, comment:"it was ok"},
        {name: "Adam", rating: 5, comment:"grand stroll"},
        {name: "Matt", rating: 4.5, comment: "cool beans"}
      ]
    }
  }

/*
  componentDidMount(){
    axios.get('https://walkish.localtunnel.me/routes/api/all')
      .then(function(response){
        console.log(response.data)
    })
  }
*/

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '200px', // 90vw basically means take up 90% of the width screen. px also works.
      height: '200px' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
  }
    return (
      <div>
          <aside className = "profile-sidebar">
              <div ref="map" style={style}>
                This is the Walk Profile Page
                <WalkCommentList theComments={this.state.comments} />
                <WalkMapContainer google={this.props.google} />
                <WalkMapDirections />
                Below
             </div>
          </aside>
      </div>
    );
  }
}

export default WalkProfilePage
