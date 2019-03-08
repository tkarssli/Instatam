import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PostForm from '../post/post_form';
import { updatePost, clearErrors, fetchPost } from '../../actions/post_actions';




class EditPostFormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {imageUrl: "", imageFile: null, caption: "", formType: 'update'}
        // const image = post ? {
        //     imageUrl: post.photoUrl, imageFile: null, caption: post.caption, formType: 'update', post
        // } : {
            
        // }
        // this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        const that = this;
        this.props.fetchPost(this.props.match.params.postId)
        .then((res)=>{
            const post = res.post
            this.isPostOwner()
            this.setState({imageUrl: post.photoUrl, caption: post.caption})

        })
    }
    isPostOwner() {
        if(this.props.post.userId !== this.props.currUserId){
           return this.props.history.push('/')
        }

    }

    render(){
       const { post, currUserId, action, errors, fetchPost } = this.props
        return(
            <>
                <PostForm image={this.state} action={action} errors={errors} clearErrors={this.props.clearErrors} post={post}/>
    
                
            </>
        )
    }
}

const mSP = (state, ownProps) => {
    return { 
            post: state.entities.posts[ownProps.match.params.postId],
            currUserId: state.session.id, 
            errors: state.errors.post
        }
}

const mDP = (dispatch,ownProps) => ({
    action: formData => dispatch(updatePost(formData, ownProps.match.params.postId)),
    fetchPost: postId => dispatch(fetchPost(postId)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSP, mDP)(EditPostFormContainer)