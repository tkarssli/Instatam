import React from 'react';

export default function Post({ post, user }) {
    return (
        <article className="post-index post-detail">
           
            <div className="image-container">
                <img src={post.photoUrl} alt={post.caption}/>
            </div>
            <div className="post-aside">
                { user ? (
                    <header>
                        <img src={user.avatar}/>
                        <div>{user.username}</div>
                    </header>
                ):("")}
                <p>{post.caption}</p>
                <div className="post-comments">
                    {/* <Comments /> */}
                </div>
            </div>
            <div className="hamburger"></div>
        </article>
    )
}