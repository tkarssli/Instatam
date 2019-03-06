import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearModals, openSettingsModal } from '../../actions/modal_actions';

import CommentsIndex from '../comments/comment_index'

const Post = ({ post, user, clearModals, openSettingsModal }) => {
    const handleClick= (e) => {
        clearModals()
    }

    const openSettings = (e) => {
        openSettingsModal({type: 'post', post})
    }
    return (
        <article className="post-index post-detail">
           
            <div className="image-container">
                <img src={post.photoUrl} alt={post.caption}/>
            </div>
            <div className="post-aside">
                { user ? (
                    <header>
                        <img src={user.avatar}/>
                        <div><Link onClick={handleClick} to={`/${user.id}`}>{user.username}</Link></div>
                    </header>
                ):("")}
                    <a onClick={openSettings} >settings</a>
                <p>{post.caption}</p>
                <div className="post-comments">
                    <CommentsIndex postId={post.id} />
                </div>
            </div>
            <div className="hamburger"></div>
        </article>
    )
}

const mDP = dispatch => ({
    clearModals: () => dispatch(clearModals()),
    openSettingsModal: modal => dispatch(openSettingsModal(modal))
})

export default connect(null, mDP)(Post)