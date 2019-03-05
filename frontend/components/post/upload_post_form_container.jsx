import { connect } from 'react-redux';

import PostForm from '../post/post_form';
import { createPost } from '../../actions/post_actions';

const mSP = state => ({
    image: {imageUrl: "", imageFile: null, caption: "", formType: 'upload'}
})

const mDP = dispatch => ({
    action: post => dispatch(createPost(post))
})

export default connect(mSP, mDP)(PostForm)