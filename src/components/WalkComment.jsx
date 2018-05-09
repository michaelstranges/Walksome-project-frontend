import React, {Component} from 'react';

class WalkComment extends Component {
  render(){
    return(
      <div>
        <div className="comment">
          <br/>
          <div className="message-user">{this.props.commentContent.name} - {this.props.commentContent.rating}</div>
          <div className="message-content">{this.props.commentContent.comment}</div>
        </div>
      </div>
    )
  }
}

export default WalkComment;
