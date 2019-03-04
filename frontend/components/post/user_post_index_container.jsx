import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchUserPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { receiveScroll } from '../../actions/scroll_actions'

const mSP = (state, ownProps )=> {
    return {
    posts: state.entities.posts,
    id: ownProps.userId
}}

const mDP = dispatch => ({
    fetchPosts: (id) => dispatch(fetchUserPosts(id)),
    openModal: modal => {
        dispatch(receiveScroll(modal.scroll));
        dispatch(openModal(modal));
    }
})

export default connect(mSP, mDP)(PostIndex)