import {
    OPEN_POST_MODAL,
    OPEN_SETTINGS_MODAL,
    CLOSE_POST_MODAL,
    CLOSE_SETTINGS_MODAL,
    CLEAR_MODALS,
    CLOSE_LOADING_MODAL,
    OPEN_LOADING_MODAL
} from '../../actions/modal_actions';

const defaultState = {post: {}, settings: {}, loading: false};

export default function modalReducer(oldState = defaultState, action) {
    Object.freeze(oldState)
    let state = Object.assign({}, oldState)
    switch (action.type) {
        
        // Post
        case OPEN_POST_MODAL:
            state.post = action.modal;
            return state;
            
        case CLOSE_POST_MODAL:
            state.post = {};
            return state;

        //Settings
        case OPEN_SETTINGS_MODAL:
            state.settings = action.modal;
            return state;

        case CLOSE_SETTINGS_MODAL:
            state.settings = {};
            return state;

        //Loading
        case OPEN_LOADING_MODAL:
            state.loading = true;
            return state;
        case CLOSE_LOADING_MODAL:
            state.loading = false;
            return state;

        // Clear
        case CLEAR_MODALS:
            return defaultState;
        default:
            return oldState;
    }
}