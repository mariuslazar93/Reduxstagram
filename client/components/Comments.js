import React from 'react';

const Comment = function(props){
  return (
    <div className="comment">
      <p>
        <strong>{props.user}</strong>
        {props.text}
        <button className="remove-comment" onClick={props.removeComment.bind(null,props.params.postId, props.index)}>&times;</button>
      </p>
    </div>
  );
}

const Comments = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render(){
    const _self = this;
    return (
      <div className="comments">
        {this.props.postComments.map((comment, index) => <Comment key={index} index={index} {..._self.props} user={comment.user}  text={comment.text} />)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
