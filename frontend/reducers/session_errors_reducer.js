import {
  SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions'

export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      return []

    case SESSION_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
      return [];

    default:
      return oldState
  }
}