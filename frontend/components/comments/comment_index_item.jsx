import React from 'react';
import { Link } from  'react-router-dom';

const CommentIndexItem = ({ comment, user, clearModals, deleteComment, currUserId}) => {
    const handleClick = (e) => {
        clearModals()
    }

    const handleDelete = () => {
        deleteComment(comment.id)
    }
   return ( 
    <div className="comment-row">
        <Link to={`/${user.id}`} onClick={handleClick}>{user.username}</Link> 
        <span>{comment.body}</span>
        {comment.userId !== currUserId ? ("") : (
            <div className="close-icon" onClick={handleDelete} ><div className="icon glyph"></div></div>
        )}
    </div>)
}

export default CommentIndexItem;