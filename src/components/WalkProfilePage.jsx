import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

//map child component
import MyMapContainer from './WalkMapContainer.jsx'
import WalkCommentList from './WalkCommentList.jsx'
import WalkCommentInput from './WalkCommentInput.jsx'

class WalkProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      site_id: this.props.match.params.id, //set site-id to params.id, use later in code for routing
      name: "Spadina",
      description: "an OK walk",
      walk_time: 4,
      map_coords: [{start: {lat: 43.647986, lng: -79.389184} ,end: {lat: 43.644665, lng: -79.394945} }],
      comments: [
        {name: "John", rating: 4, comment:"it was ok"},
        {name: "Adam", rating: 5, comment:"grand stroll"},
        {name: "Matt", rating: 4.5, comment: "cool beans"}
      ]
    }
  }


  componentDidMount(){
    const theSite = this.state.site_id //establishes the curent site
    axios.get(`http://localhost:8080/routes/api/${this.state.site_id}`)
    .then(function(response){
      const comments_db = response.data[theSite].comments //cleaning up code
      const updatedComments = comments_db.map(content => {
        //Below pulls commenter name and comment from the object coming from db
        let commenter_name = Object.keys(content)[0]
        let commenter_comment = content[commenter_name][0]
        //Below sets commentInDb to the new comment in correct format
        let commentInDb = {name: commenter_name, rating: null, comment: commenter_comment }
        //Below current comments in the db
        const currentComments = this.state.comments
        //Below the new comment into the current comments to update
        const updateComments  = currentComments.concat(commentInDb)
        //Below returns the updated comments out of the loop to update state later
        return updateComments
      })

      console.log("updated comments ==> ", updatedComments)

      //recall .map returns and array.  Had an array in an array issue.  use updatedComments[0]

      this.setState({
        name: response.data[theSite].name,
        description: response.data[theSite].description,
        walk_time: response.data[theSite].walk_time,
        comments: updatedComments[0]
      })

    }.bind(this))
    .catch(function(error){
      console.log("ERROR ==>", error);
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
                          <div className="grid-photo-item">photo1</div>
                          <div className="grid-photo-item">photo2</div>
                          <div className="grid-photo-item">photo3</div>
                          <div className="grid-photo-item">photo4</div>
                          <div className="grid-photo-item">photo5</div>
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
