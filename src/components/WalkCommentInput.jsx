import React, {Component} from 'react';

class WalkCommentInput extends Component {

  onCommentPost = (evt) => {
    if(evt.key === "Enter"){
      this.props._onCommentPost(evt.target.value)
    }
  }


  render(){
    return(
      <div className="comment-container">
          <textarea
          className="walk-comment-input"
          placeholder="Share your thoughts..."
          onKeyPress={this.onCommentPost}
          />
      </div>
    )
  }
}

export default WalkCommentInput;
