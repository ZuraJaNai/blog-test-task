import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { comments } = this.props;
    const commentComponets = [];
    comments.forEach((comment) => {
      commentComponets.push(<Comment key={comment.id} body={comment.body} />);
    });
    return (
      <div className="comments-section">
        <form className="new-comment" onSubmit={() => this.props.addComment(this.state.text)}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <button type="submit">ADD COMMENT</button>
        </form>
        {commentComponets}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addComment: PropTypes.func.isRequired,
};

export default Comments;
