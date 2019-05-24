import { SET_POSTS, SET_CURRENT_POST } from '../actions/types';

const initialState = {
  posts: [],
  currentPost: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload.reverse(),
      };
    }
    case SET_CURRENT_POST: {
      return {
        ...state,
        currentPost: action.payload,
      };
    }
    default:
      return state;
  }
}
