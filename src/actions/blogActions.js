import axios from 'axios';
import { SET_POSTS } from './types';

// server response doesn't have Access-Control-Allow-Origin header

const getPosts = () => axios
  .get('https://simple-blog-api.crew.red/posts', { crossDomain: true })
  .then(res => res.data)
  .catch((err) => {
    console.log(`err in getPosts ${err}`);
  });
const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts,
});

export const updatePosts = () => dispatch => getPosts().then((posts) => {
  dispatch(setPosts(posts));
});

export const addPost = postData => (dispatch) => {
  axios
    .post('/posts', postData)
    .then(updatePosts(dispatch))
    .catch((err) => {
      console.log(`errors in addPost ${err}`);
    });
};

export const deletePost = id => (dispatch) => {
  const deleteURL = `/posts/${id}`;
  axios
    .delete(deleteURL)
    .then(updatePosts(dispatch))
    .catch((err) => {
      console.log(`errors in deletePost ${err}`);
    });
};

export const updatePost = postData => (dispatch) => {
  const updateURL = `/posts/${postData.id}`;
  axios
    .put(updateURL, postData)
    .then(updatePosts(dispatch))
    .catch((err) => {
      console.log(`errors in updatePost ${err}`);
    });
};
