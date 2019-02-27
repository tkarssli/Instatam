import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
  } from '../actions/session_actions'
  
  const defaultState = {
    id: null
  }
  
export default (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let state = Object.assign({}, oldState);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        state.id = action.user.id;
        return state;
  
      case LOGOUT_CURRENT_USER:
        state.id = null
        return state;
  
      default:
        return state;
    }
  
}