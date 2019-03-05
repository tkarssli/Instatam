import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearModals, openSettingsModal } from '../../actions/modal_actions';

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
                <Link onClick={handleClick} to={`/p/${post.id}/edit`}>Edit</Link>
            </div>
            <div className="post-aside">
                { user ? (
                    <header>
                        <img src={user.avatar}/>
                        <div><Link onClick={handleClick} to={`/${user.id}`}>{user.username}</Link></div>
                    </header>
                ):("")}
                    <div onClick={openSettings} >settings</div>
                <p>{post.caption}</p>
                <div className="post-comments">
                    {/* <Comments /> */}
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