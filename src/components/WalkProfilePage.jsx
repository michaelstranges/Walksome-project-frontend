import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/WalkMapContainer.css';
import axios from 'axios';

//map child component
import MyMapContainer from './WalkMapContainer.jsx'
import WalkCommentList from './WalkCommentList.jsx'
import WalkCommentInput from './WalkCommentInput.jsx'
import logo from '../logo.svg';
import toronto1 from '../toronto1.jpg';
import toronto2 from '../toronto2.jpg';
import toronto3 from '../toronto3.jpg';
import toronto4 from '../toronto4.jpg';
import toronto5 from '../toronto5.jpg';

class WalkProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      site_id: this.props.match.params.id, //set site-id to params.id, use later in code for routing
      name: "Spadina",
      description: "an OK walk",
      walk_time: 4,
      map_coords: [{start: {lat: 43.638229, lng: -79.3797}, end: {lat: 43.638229, lng: -79.3797}}],
      comments: [], //made empty so that I could just concat to an empty array
      map_markers: [
        {lat: 43.638871, lng: -79.400599},
        {lat: 43.641774, lng: -79.386},
        {lat: 43.642905 ,lng: -79.371948},
        {lat: 43.643471 ,lng: -79.367719},
        {lat: 43.638648 ,lng: -79.387847},
        {lat: 43.639020 ,lng: -79.380053}
      ]
    }
  }


  componentDidMount(){
    const theSite = this.state.site_id //establishes the curent site
    axios.get(`http://localhost:8080/routes/api/${this.state.site_id}`)
    .then(function(response){
      const stateMapCoords = this.state.map_coords;
      //compiles the comment package, concatenating the built package to the current state pack
//GET MAPS
      const db_map = [
        {start: {lat: response.data[theSite].starts[0], lng: response.data[theSite].starts[1]},
        end: {lat: response.data[theSite].ends[0], lng: response.data[theSite].ends[1]}}
      ]



      this.setState({
        name: response.data[theSite].name,
        description: "A great walk through the city.  Along the way you pass the ACC, the SkyDome (which is it's real name), harbourfront center and down to sugar beach",//response.data[theSite].description,
        walk_time: response.data[theSite].walk_time,
        map_coords: db_map
      })

    }.bind(this))
    .catch(function(error){
      console.log("GET ERROR ==>", error);
    })
      axios.get(`http://localhost:8080/routes/api/${this.state.site_id}/comments`)
      .then(function(response){
        console.log("THIS NEW===>",response)
        const stateComments = this.state.comments;
        const comments_db = response.data //cleaning up code
        const dbPackage = [];  //need a blank array to build my comments
        //GET COMMENTS
        for (const content of comments_db) {

          let commentInDb = {name: content.user_name, rating: null, comment: content.comment }

          dbPackage.push(commentInDb)

        }

        console.log("dbPackage", dbPackage)


        const compileComments = stateComments.concat(dbPackage)
        console.log("compileComments", compileComments)
      this.setState({
        comments: compileComments
      })
    }.bind(this))
    .catch(function(error){
      console.log("GET ERROR ==>", error);
    })
  }

  _onCommentPost = evt => {
    const newComment = [{name: "Michael", rating: 4, comment: evt}] //THE CURRENT SIGNED IN USER
    const comments = newComment.concat(this.state.comments) //puts new comment at top

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
    const divStyle={
      'font-size': '25pt',
      'font-weight': 'normal'
    }
    return (
      <div className="the-entire-page">
        <div className="new-profile-container">
          <div className="profile-input-sidebar">
            <WalkCommentInput _onCommentPost={this._onCommentPost} />
            <aside className = "profile-sidebar">
              <div ref="map" style={style}>
                <WalkCommentList theComments={this.state.comments} />
              </div>
            </aside>
          </div>
        </div>
        <div className="profile-walk-map">
          <div className="profile-walk-map-secondtitle">
            <div className="profile-walk-map-title">
              {this.state.name} <span style={divStyle}>{this.state.walk_time} min</span>
            </div>
          </div>
          <MyMapContainer theRoute={this.state.map_coords} theMarkers={this.state.map_markers} />
        </div>
        <div className = "profile-info">
          <div className="profile-walk-description">
            {this.state.description}
          </div>
          <div className="grid-profile-walk-photos">
            <div className="grid-photo-item"><img src={toronto1} className="the-walk-photos" alt="logo" /></div>
            <div className="grid-photo-item"><img src={toronto2} className="the-walk-photos" alt="logo" /></div>
            <div className="grid-photo-item"><img src={toronto3} className="the-walk-photos" alt="logo" /></div>
            <div className="grid-photo-item"><img src={toronto4} className="the-walk-photos" alt="logo" /></div>
            <div className="grid-photo-item"><img src={toronto5} className="the-walk-photos" alt="logo" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default WalkProfilePage
