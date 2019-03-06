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
        <article className="post post-detail">
           
            <div className="image-container">
                <img src={post.photoUrl} alt={post.caption}/>
            </div>
            { user ? (
            <header className="avatar">
                {user.avatar ? (
                        <img src={user.avatar}/>
                    ):(
                        <img src="/assets/default_avatar.svg"/>

                    )}
                <div>
                    <Link onClick={handleClick} to={`/${user.id}`}>{user.username}</Link>
                    {/* <span>•</span> */}
                </div>
            </header>
                ):("")}
            <div className="comment-index">
                <p>{post.caption}</p>
                <CommentsIndex postId={post.id} />
            </div>
            <div className="hamburger">
                <div onClick={openSettings} className="icon glyph"></div>
            </div>
        </article>
    )
}

const mDP = dispatch => ({
    clearModals: () => dispatch(clearModals()),
    openSettingsModal: modal => dispatch(openSettingsModal(modal))
})

export default connect(null, mDP)(Post)