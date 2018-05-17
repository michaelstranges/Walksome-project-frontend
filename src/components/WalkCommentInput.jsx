import React, {Component} from 'react';

class WalkCommentInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      clearBox: ""
    }
  }

  onCommentPost = (evt) => {
    if(evt.key === "Enter"){
      this.props._onCommentPost(evt.target.value)
      evt.target.value = this.state.clearBox
    }
  }


  render(){
    return(
      <div className="comment-container-input">
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
