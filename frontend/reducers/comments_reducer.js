import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions'

export default (oldState, action) => {
    Object.freeze(oldState);
    let state = Object.assign({}, oldState);
    switch (action.type) {

        case RECEIVE_COMMENTS:
            return action.comments;
        
        case RECEIVE_COMMENT:
            state[action.comment.id] = action.comment;
            return state;

        case REMOVE_COMMENT:
            delete state[action.commentId]
            return state;

        default:
            return state;
    }
}