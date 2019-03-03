import React from 'react';

const PostIndexItemModal = ({ post }) => (
    <article className="post-index item-detail">
        <header></header>
        <div className="image">
        <img src={post.photoUrl} alt={post.caption}/>
        </div>
        <div></div>
        <div className="hamburger"></div>
    </article>
)

export default PostIndexItemModal;