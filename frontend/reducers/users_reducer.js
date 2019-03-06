import { RECEIVE_USER,  RECEIVE_USERS } from '../actions/user_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_COMMENTS } from '../actions/comment_actions'



export default (oldState, action) => {
  Object.freeze(oldState);
  let state = Object.assign({}, oldState);
  switch (action.type) {
    
    case RECEIVE_USERS:
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.users);

    case RECEIVE_CURRENT_USER:      
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});

    default:
      return state
  }

}