import * as APIUtil from '../util/like_api_util';

import { RECEIVE_POST } from './post_actions';
// export const LIKE_ERRORS = "LIKE_ERRORS";



// Session Thunks
export const createLike = postId => dispatch => (
  APIUtil.createLike(postId)
  .then(post => {
      return dispatch(receiveLike(post))
    },
    // err => (
    //   dispatch(userErrors(err.responseJSON))
    // )
    )
);

export const deleteLike = postId => dispatch => (
    APIUtil.deleteLike(postId)
    .then(post => {
        return dispatch(removeLike(post))
      },
    //   err => (
    //     dispatch(userErrors(err.responseJSON))
    //   )
      )
  );

// Like actions
export const receiveLike = post => ({
  type: RECEIVE_POST,
  post
})

export const removeLike = post => ({
  type: RECEIVE_POST,
  post
})

// Error actions

// export const likeErrors = (errors) => ({
//   type: LIKE_ERRORS,
//   errors
// })

window.fetchUser = fetchUser