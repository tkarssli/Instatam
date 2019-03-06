import {
    COMMENT_ERRORS,
    CLEAR_ERRORS,
    RECEIVE_COMMENT,
} from '../actions/comment_actions'

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {

        case RECEIVE_COMMENT:
            return []

        case COMMENT_ERRORS:
            return action.errors;

        case CLEAR_ERRORS:
            return [];

        default:
            return oldState
    }
}