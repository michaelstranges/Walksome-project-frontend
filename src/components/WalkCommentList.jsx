import React, { Component } from 'react';
import WalkComment from './WalkComment.jsx'

class WalkCommentList extends Component {
  render(){
    const incomingComments = this.props.theComments.map((comment, index) => {
      return <WalkComment key={index} commentContent={comment} />
    })

  return (
    <div>
      {incomingComments}
    </div>
  )}
}

export default WalkCommentList;
