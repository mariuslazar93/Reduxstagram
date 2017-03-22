import React from 'react';
import Photo from './Photo'
import Comments from './Comments'


const SinglePhotoGrid = React.createClass({
  render(){
    const thisProps = this.props;
    const postId = thisProps.params.postId;
    var postComments = this.props.comments[postId] || [];
    var post, index;

    this.props.posts.forEach((item, i) => {
      if(postId === item.code){
        post = item;
        index = i;
      }
    });
    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default SinglePhotoGrid;
