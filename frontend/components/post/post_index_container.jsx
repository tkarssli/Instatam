import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions'

const mSP = state => ({
    posts: state.entities.posts
})

const mDP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mSP, mDP)(PostIndex)