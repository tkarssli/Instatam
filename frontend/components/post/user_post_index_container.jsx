import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchUserPosts } from '../../actions/post_actions';
import { openPostModal } from '../../actions/modal_actions';
import { receiveScroll } from '../../actions/scroll_actions'

const mSP = (state, ownProps )=> {
    return {
    posts: state.entities.posts,
    id: ownProps.userId
}}

const mDP = dispatch => ({
    action: (id) => dispatch(fetchUserPosts(id)),
    openPostModal: modal => {
        dispatch(receiveScroll(modal.scroll));
        dispatch(openPostModal(modal));
    }
})

export default connect(mSP, mDP)(PostIndex)