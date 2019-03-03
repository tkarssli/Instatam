import React from 'react';

const PostIndexItem = ({ post, openModal }) => (
    <div className = "post">
        <div className="post-hover" onClick={() => openModal('post')}></div>
        <img src={post.photoUrl} alt={post.caption}/>
    </div>
)

export default PostIndexItem;