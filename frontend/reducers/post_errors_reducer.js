import {
    POST_ERRORS,
    CLEAR_ERRORS,
    RECEIVE_POST,
} from '../actions/post_actions'

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {

        case RECEIVE_POST:
            return []

        case POST_ERRORS:
            return action.errors;

        case CLEAR_ERRORS:
            return [];

        default:
            return oldState
    }
}