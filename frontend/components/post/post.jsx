import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearModals, openSettingsModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

import CommentsIndex from '../comments/comment_index'

class Post extends React.Component{
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }
    handleClick(e) {
        this.props.clearModals()
    }
    handleFollow(e) {
        e.persist()
        const { currUser, user, deleteFollow, createFollow } = this.props

        if (currUser.followIds.includes(user.id)){
            deleteFollow(user.id)
            .then(()=>  {
                e.target.className = "following-btn" })
        } else {
            createFollow(user.id)
            .then(()=>  {
                e.target.className = "follow-btn" })
        }
    }

    openSettings(e) {
        this.props.openSettingsModal({type: 'post', post: this.props.post})
    }

    render() {
        const { post, user, currUser} = this.props;
        return (
            <article className="post post-detail">
            
                <div className="image-container">
                    <img ref={elem => this.img = elem} src={post.photoUrl} alt={post.caption}/>
                </div>
                { user ? (
                <header className="avatar">
                    {user.avatar ? (
                            <img src={user.avatar}/>
                        ):(
                            <img src="/assets/default_avatar.svg"/>

                        )}
                    <div>
                        <Link onClick={this.handleClick} to={`/${user.id}`}>{user.username}</Link>
                        <span classNa>•</span>
                        {currUser.followIds.includes(user.id) ? (
                                <span className="follow-btn" onClick={this.handleFollow}>Follow</span>
                            ) : (
                                <span className="following-btn" onClick={this.handleFollow}>Following</span>
                            )}
                    </div>
                </header>
                    ):("")}
                <div className="comment-index">
                    <p>{post.caption}</p>
                    <CommentsIndex post={post} />
                </div>
                <div className="hamburger">
                    <div onClick={this.openSettings} className="icon glyph"></div>
                </div>
            </article>
        )
    }
}
const mSP = state => ({
    currUser: state.entities.users[state.session.id]
})
const mDP = dispatch => ({
    clearModals: () => dispatch(clearModals()),
    openSettingsModal: modal => dispatch(openSettingsModal(modal)),
    createFollow: userId => dispatch(createFollow(userId)),
    deleteFollow: userId => dispatch(deleteFollow(userId))
})

export default connect(mSP, mDP)(Post)