import React, {Component} from 'react';
import '../styles/WalkComment.css';

class WalkComment extends Component {
  render(){
    return(
        <div className="comment-container">
          <div className="message-user">{this.props.commentContent.name} - {this.props.commentContent.rating}</div>
          <div className="message-content">{this.props.commentContent.comment}</div>
        </div>
    )
  }
}

export default WalkComment;
