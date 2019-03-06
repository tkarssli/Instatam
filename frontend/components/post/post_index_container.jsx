import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { openPostModal } from '../../actions/modal_actions';
import { receiveScroll } from '../../actions/scroll_actions'

const mSP = state => ({
    posts: state.entities.posts,
    id: null
})

const mDP = dispatch => ({
    action: (id) => dispatch(fetchPosts()),
    openPostModal: modal => {
        dispatch(receiveScroll(modal.scroll));
        dispatch(openPostModal(modal));
    }
})

export default connect(mSP, mDP)(PostIndex)