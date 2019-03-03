import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SESSION_ERRORS = 'SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

// Session Thunks
export const login = (user) => dispatch => (
  APIUtil.login(user)
  .then(user => {
      return dispatch(receiveCurrentUser(user))
    },
    err => (
      dispatch(sessionErrors(err.responseJSON))
    ))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)),
    err => (
      dispatch(sessionErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()),
    err => (
      dispatch(sessionErrors(err.responseJSON))
    ))
);

// Session actions
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})


// Error actions

export const sessionErrors = (errors) => ({
  type: SESSION_ERRORS,
  errors
})

export const clearErrors = (errors) => ({
  type: CLEAR_ERRORS,
  errors
})