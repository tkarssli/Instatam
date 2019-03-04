import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { receiveScroll } from '../../actions/scroll_actions'

const mSP = state => ({
    posts: state.entities.posts
})

const mDP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    openModal: modal => {
        dispatch(receiveScroll(modal.scroll));
        dispatch(openModal(modal));
    }
})

export default connect(mSP, mDP)(PostIndex)