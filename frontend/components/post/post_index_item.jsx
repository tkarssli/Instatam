import React from 'react';

const PostIndexItem = ({ post, openPostModal }) => (
    <div className = "post-index-item">
        <div className="post-hover" onClick={() => openPostModal({type: 'post', item: post, scroll: document.documentElement.scrollTop})}></div>
        <img src={post.photoUrl} alt={post.caption}/>
    </div>
)

export default PostIndexItem;