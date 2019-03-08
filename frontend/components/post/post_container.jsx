import React from 'react';
import { connect } from 'react-redux'

import Post from './post';
import SettingsModal from '../modal/settings_modal'

import { fetchPost } from '../../actions/post_actions';
import { scrollBody } from '../../lib/dom';

class PostContainer extends React.Component{

    componentDidMount() {
        scrollBody(0)
        this.props.fetchPost(this.props.match.params.postId)
            .then(()=> this.props.fetchUser(this.props.post.userId))
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.postId !== prevProps.match.params.postId){
            scrollBody(0)
            this.props.fetchPost(this.props.match.params.postId)
            .then(({ post }) => {this.props.fetchUser(post.userId)})
        }
    }

    render () {
        document.documentElement.scrollTop = 0;

        const { post, users} = this.props;
        return (
            <>
            <SettingsModal />
            {post ? (
                <div className="post-show">
                    <Post post={post} user={users[post.userId]}/>
                </div>
            ):(
                <div className="loader"> 
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )}
            </>
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
