import {
    OPEN_POST_MODAL,
    OPEN_SETTINGS_MODAL,
    CLOSE_POST_MODAL,
    CLOSE_SETTINGS_MODAL,
    CLEAR_MODALS
} from '../../actions/modal_actions';

export default function modalReducer(oldState = {post: {}, settings: {}}, action) {
    Object.freeze(oldState)
    let state = Object.assign({}, oldState)
    console.log(action)
    switch (action.type) {
        
        case OPEN_POST_MODAL:
            state.post = action.modal;
            return state;
            
        case CLOSE_POST_MODAL:
            state.post = {};
            return state;

        case OPEN_SETTINGS_MODAL:
            state.settings = action.modal;
            return state;

        case CLOSE_SETTINGS_MODAL:
            state.settings = {};
            return state;

        case CLEAR_MODALS:
            return {post: {}, settings: {}}
            
        default:
            return oldState;
    }
}