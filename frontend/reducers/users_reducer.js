import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'



export default (oldState, action) => {
  Object.freeze(oldState);
  let state = Object.assign({}, oldState);
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
      
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
      
    default:
      return state
  }

}