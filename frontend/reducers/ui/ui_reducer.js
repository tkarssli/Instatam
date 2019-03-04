import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import scrollReducer from './scroll_reducer';

export default combineReducers({
    modal: modalReducer,
    scroll: scrollReducer
})