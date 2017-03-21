import React from 'react';
import Photo from './Photo'
import Comments from './Comments'


const SinglePhotoGrid = React.createClass({
  render(){
    const thisProps = this.props;
    var post = {}, index = 0;
    this.props.posts.forEach((item, i) => {
      if(thisProps.params.postId === item.code){
        post = item;
        index = i;
      }
    });
    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments comments={this.props.comments[thisProps.params.postId]}/>
      </div>
    )
  }
});

export default SinglePhotoGrid;
