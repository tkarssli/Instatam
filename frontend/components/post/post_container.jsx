import React from 'react';
import { connect } from 'react-redux'

import Post from './post';

import { fetchPost } from '../../actions/post_actions';

class PostContainer extends React.Component{

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId)
            .then(()=> this.props.fetchUser(this.props.post.userId))
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.postId !== prevProps.match.params.postId){
            this.props.fetchPost(this.props.match.params.postId)
            .then(({ post }) => {this.props.fetchUser(post.userId)})
        }
    }

    render () {
        const { post, users} = this.props;
        return (
            post ? (
                <Post post={post} user={users[post.userId]}/>
            ):(
                <div className="loader"> 
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.postId]
    return {
        post: post,
        users: state.entities.users
    }}

const mapDispatchToProps = dispatch => ({
        // closeModal: () => dispatch(closeModal()),
        fetchPost: (id) => dispatch(fetchPost(id)),
        fetchUser: (id) => dispatch(fetchUser(id)),
        
    })

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
