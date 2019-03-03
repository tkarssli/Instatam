import React from 'react';

const PostIndexItem = ({ post }) => (
    <div className = "post">
        <img src={post.photoUrl} alt={post.caption}/>
    </div>
)

export default PostIndexItem;