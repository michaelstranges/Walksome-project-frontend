import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

//map child component
import MyMapContainer from './WalkMapContainer.jsx'
import WalkCommentList from './WalkCommentList.jsx'
import WalkCommentInput from './WalkCommentInput.jsx'
import logo from '../logo.svg';

class WalkProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      site_id: this.props.match.params.id, //set site-id to params.id, use later in code for routing
      name: "Spadina",
      description: "an OK walk",
      walk_time: 4,
      map_coords: [{start: {lat: 43.638229, lng: -79.3797}, end: {lat: 43.638229, lng: -79.3797}}],
      comments: [] //made empty so that I could just concat to an empty array
    }
  }


  componentDidMount(){
    const theSite = this.state.site_id //establishes the curent site
    axios.get(`http://localhost:8080/routes/api/${this.state.site_id}`)
    .then(function(response){
      const stateComments = this.state.comments;
      const stateMapCoords = this.state.map_coords;
      const comments_db = response.data[theSite].comments //cleaning up code
      const dbPackage = [];  //need a blank array to build my comments
//GET COMMENTS
      for (const content in comments_db) {
        //get the commenter name from the db response
        let commenter_name = Object.keys(comments_db[content])
        //get the comment from the db response using the commenter name
        let commenter_comment = comments_db[content][commenter_name]
        //puts the comment into the correct formate
        let commentInDb = {name: commenter_name[0], rating: null, comment: commenter_comment[0] }
        //builds the database comment package
        dbPackage.push(commentInDb)
      }
      //compiles the comment package, concatenating the built package to the current state pack
      const compileComments = stateComments.concat(dbPackage)
//GET MAPS
      const db_map = [
        {start: {lat: response.data[theSite].starts[0], lng: response.data[theSite].starts[1]},
        end: {lat: response.data[theSite].ends[0], lng: response.data[theSite].ends[1]}}
      ]

      console.log(db_map)

      this.setState({
        name: response.data[theSite].name,
        description: response.data[theSite].description,
        walk_time: response.data[theSite].walk_time,
        comments: compileComments,
        map_coords: db_map
      })

    }.bind(this))
    .catch(function(error){
      console.log("GET ERROR ==>", error);
    })
  }

  _onCommentPost = evt => {
    const newComment = [{name: "Test", rating: 4, comment: evt}] //THE CURRENT SIGNED IN USER
    const comments = newComment.concat(this.state.comments) //puts new comment at top
    console.log(this.props)
    this.setState({comments: comments});
/*
    const server = axios.create({
       timeout: 10000,
       headers: {
     'Content-Type': 'application/json;charset=UTF-8'
     }
    })
*/
    axios.post(`http://localhost:8080/routes/api/${this.state.site_id}/comment/new`, {
        comment: evt,
        route_id: `${this.state.site_id}`,
        user_id: 1
      })
      .then(function(response){
        console.log("successfully commented)")
        console.log("post response ==>", response)
      })
      .catch(function(error){
        console.log("POST ERROR ==>", error);
      })
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
                <WalkCommentInput _onCommentPost={this._onCommentPost} />
                <WalkCommentList theComments={this.state.comments} />
                <div className="additional-profile-info">
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
                        <MyMapContainer theRoute={this.state.map_coords} />
                        <div className="grid-profile-walk-photos">
                          <div className="grid-photo-item"><img src={logo} className="Nav-logo" alt="logo" /></div>
                          <div className="grid-photo-item"><img src={logo} className="Nav-logo" alt="logo" /></div>
                          <div className="grid-photo-item"><img src={logo} className="Nav-logo" alt="logo" /></div>
                          <div className="grid-photo-item"><img src={logo} className="Nav-logo" alt="logo" /></div>
                          <div className="grid-photo-item"><img src={logo} className="Nav-logo" alt="logo" /></div>
                        </div>
                  </div>
                </div>
                Below
             </div>
          </aside>
      </div>
    );
  }
}

export default WalkProfilePage
