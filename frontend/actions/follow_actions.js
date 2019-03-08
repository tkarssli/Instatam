import * as APIUtil from '../util/follow_api_util';

import { RECEIVE_USERS } from './user_actions';
// export const LIKE_ERRORS = "LIKE_ERRORS";



// Session Thunks
export const createFollow = userId => dispatch => (
  APIUtil.createFollow(userId)
  .then(user => {
      return dispatch(receiveFollow(user))
    },
    )
);

export const deleteFollow = userId => dispatch => (
    APIUtil.deleteFollow(userId)
    .then(user => {
        return dispatch(removeFollow(user))
      },
      )
  );

// Follow actions
export const receiveFollow = users => ({
  type: RECEIVE_USERS,
  users
})

export const removeFollow = users => ({
  type: RECEIVE_USERS,
  users
})
