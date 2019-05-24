import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePosts } from '../actions/blogActions';
import { getCurrentPost } from '../actions/postActions';
import Post from './Post';

class Blog extends React.Component {
  showPostDetails = (id) => {
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    const { posts } = this.props;
    const postComponents = [];
    posts.forEach((post) => {
      postComponents.push(
        <div className="post" key={post.id} onClick={() => this.showPostDetails(post.id)}>
          <Post post={post} handleClick={this.showPostDetails} />
        </div>,
      );
    });
    return <div className="blog">{postComponents}</div>;
  }
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  posts: state.blog.posts,
});

export default connect(
  mapStateToProps,
  { updatePosts, getCurrentPost },
)(Blog);
