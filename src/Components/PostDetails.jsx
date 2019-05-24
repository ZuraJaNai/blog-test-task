import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCurrentPost, addComment } from '../actions/postActions';
import Post from './Post';
import Comments from './Comments';

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      match: {
        params: { postId },
      },
    } = this.props;
    this.props.getCurrentPost(postId);
  }

  addNewComment = (body) => {
    const {
      post: { id },
    } = this.props;
    this.props.addComment({
      postId: id,
      body,
    });
  };

  render() {
    const { post } = this.props;
    if (post === null) {
      return null;
    }
    return (
      <div>
        <Link to="/">Go back</Link>
        <div className="details">
          <Post post={post} />
          <p>{post.body}</p>
          <Comments comments={post.comments} addComment={this.addNewComment} />
        </div>
      </div>
    );
  }
}

PostDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string.isRequired,
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
  addComment: PropTypes.func.isRequired,
};

PostDetails.defaultProps = {
  post: null,
};

const mapStateToProps = state => ({
  post: state.blog.currentPost,
});

export default connect(
  mapStateToProps,
  { getCurrentPost, addComment },
)(PostDetails);
