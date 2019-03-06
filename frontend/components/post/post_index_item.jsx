import React from 'react';

const PostIndexItem = ({ post, openPostModal }) => (
    <div className = "post-index-item">
        <div className="post-hover" onClick={() => openPostModal({type: 'post', item: post, scroll: document.documentElement.scrollTop})}>
            <div>
                <span className="comment-count sprite glyph"></span>
                <span className="bold">{post.commentIds.length}</span>
            </div>
        </div>
        <img src={post.photoUrl} alt={post.caption}/>
    </div>
)

export default PostIndexItem;