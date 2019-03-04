import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const USER_ERRORS = "USER_ERRORS"


// Session Thunks
export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
  .then(user => {
      return dispatch(receiveUser(user))
    },
    err => (
      dispatch(userErrors(err.responseJSON))
    ))
);



// User actions
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

// Error actions

export const userErrors = (errors) => ({
  type: USER_ERRORS,
  errors
})

window.fetchUser = fetchUser