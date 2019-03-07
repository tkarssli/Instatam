import { connect } from 'react-redux';

import PostForm from '../post/post_form';
import { createPost, clearErrors } from '../../actions/post_actions';

const mSP = state => ({
    image: {imageUrl: window.placeholder, imageFile: null, caption: "", formType: 'upload'},
    errors: state.errors.post
})

const mDP = dispatch => ({
    action: post => dispatch(createPost(post)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSP, mDP)(PostForm)