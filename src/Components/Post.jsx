import React from 'react';
import PropTypes from 'prop-types';

const Post = ({
  post: {
    title, description, author, date,
  },
}) => (
  <div className="post-info">
    <div className="post-header">
      <p>{author}</p>
      <p>{date}</p>
    </div>
    <h2 className="title">{title}</h2>
    <h4>{description}</h4>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
