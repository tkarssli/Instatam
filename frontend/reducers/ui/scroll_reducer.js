import { RECEIVE_SCROLL, CLEAR_SCROLL} from '../../actions/scroll_actions';

export default function modalReducer(state = {}, action) {
    switch (action.type) {
        
        case RECEIVE_SCROLL:
            return action.scroll

        case CLEAR_SCROLL:
            return null;

        default:
            return state;
    }
}