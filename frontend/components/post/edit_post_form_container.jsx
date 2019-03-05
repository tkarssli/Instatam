import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PostForm from '../post/post_form';
import { updatePost } from '../../actions/post_actions';




function EditPostFormContainer({ image, currUserId }) {
    debugger
    const isPostOwner = () =>{
        if(image.post.userId !== currUserId){
           return <Redirect to="/"/>
        }
    }
    return(
        <>
            {isPostOwner()}
            <PostForm image={image} />

            
        </>
    )
}

const mSP = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.postId];
    const currUserId = state.session.id;
    const image = post ? {
            imageUrl: post.photoUrl, imageFile: null, caption: post.caption, formType: 'edit', post
        } : {
            imageUrl: "", imageFile: null, caption: "", formType: 'edit', post
        }

    return { image, currUserId }
}

const mDP = (dispatch,ownProps) => ({
    action: formData => dispatch(updatePost(formData, ownProps.match.params.postId))
})

export default connect(mSP, mDP)(EditPostFormContainer)