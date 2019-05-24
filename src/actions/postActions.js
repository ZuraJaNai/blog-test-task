import axios from 'axios';
import { SET_CURRENT_POST } from './types';

const getPost = id => axios
  .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`, { crossDomain: true })
  .then(res => res.data)
  .catch((err) => {
    console.log(`err in getPosts ${err}`);
  });

const setPost = post => ({
  type: SET_CURRENT_POST,
  payload: post,
});

export const getCurrentPost = id => dispatch => getPost(id).then((post) => {
  dispatch(setPost(post));
});

export const addComment = comment => () => {
  axios
    .post('https://simple-blog-api.crew.red/comments', comment, { crossDomain: true })
    .then(getCurrentPost(comment.postId))
    .catch((err) => {
      console.log(`err in addComment ${err}`);
    });
};
