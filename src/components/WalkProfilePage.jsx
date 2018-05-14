import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

//map child component
import WalkMapContainer from './WalkMapContainer.jsx'
import WalkCommentList from './WalkCommentList.jsx'
import WalkCommentInput from './WalkCommentInput.jsx'

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


  componentDidMount(){
    axios.get('http://localhost:8080/routes/api/all')
      .then(function(response){
        console.log(response, "RESPONSE")
    })
  }

  _onCommentPost = evt => {
    const newComment = {name: "Test", rating: 4, comment: evt}
    const comments = this.state.comments.concat(newComment)
    console.log(this.props)
    this.setState({comments: comments});
  }


  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '200px',
      height: '200px'
  }
    return (
      <div>
          <aside className = "profile-sidebar">
              <div ref="map" style={style}>
                This is the Walk Profile Page
                <WalkCommentInput _onCommentPost={this._onCommentPost} />
                <WalkCommentList theComments={this.state.comments} />
                <div className = "profile-info">
                  <div className="profile-walk-name">
                    WALK NAME: {this.state.name}
                  </div>
                    <div className="profile-walk-description">
                      DESCRIPTION: {this.state.description}
                    </div>
                      <div className="profile-walk-time">
                        TIME: {this.state.walk_time}
                      </div>
                      <WalkMapContainer />
                </div>
                Below
             </div>
          </aside>
      </div>
    );
  }
}

export default WalkProfilePage
