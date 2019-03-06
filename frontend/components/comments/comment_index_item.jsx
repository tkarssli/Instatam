import React from 'react';
import { Link } from  'react-router-dom';

const CommentIndexItem = ({ comment, user, clearModals}) => {
    const handleClick = (e) => {
        clearModals()
    }
   return ( 
    <div>
        <Link to={`/${user.id}`} onClick={handleClick}>{user.username}</Link> 
        <span>{comment.body}</span>
        {/* {<div className="close-icon"></div>} */}
    </div>)
}

export default CommentIndexItem;