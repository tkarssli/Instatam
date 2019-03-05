import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from '../actions/post_actions'



export default (oldState, action) => {
    Object.freeze(oldState);
    let state = Object.assign({}, oldState);
    switch (action.type) {

        case RECEIVE_POSTS:
            return action.posts;
        
        case RECEIVE_POST:
            state[action.post.id] = action.post;
            return state;

        default:
            return state;
    }

}