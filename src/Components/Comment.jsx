import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ body }) => <div className="comment">{body}</div>;

Comment.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Comment;
