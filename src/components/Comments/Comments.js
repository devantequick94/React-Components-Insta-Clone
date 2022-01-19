import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;



  {/* map through the comments prop and render a Comment for every piece of data */}
  return (
    <div>
      {Comments.map((comment, idx) => (
        <Comment comment ={comment} key={idx} />
      ))}
    </div>
  );
};

export default Comments;
