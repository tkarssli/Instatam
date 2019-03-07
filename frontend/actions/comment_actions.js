import * as APIUtil from '../util/comment_api_util';

import { receiveUsers } from './user_actions';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const COMMENT_ERRORS = 'COMMENT_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

// Session Thunks
export const fetchComments = (postId) => dispatch => (
    APIUtil.fetchComments(postId)
        .then(payload => dispatch(receiveComments(payload)),
        err => (
            dispatch(commentError(err.responseJSON))
        ))
)

export const fetchComment = commentId => dispatch => (
    APIUtil.fetchComment(commentId)
        .then(payload => dispatch(receiveComment(payload)),
        err => (
            dispatch(commentError(err.responseJSON))
        ))
)

export const createComment = comment => dipatch => (
    APIUtil.createComment(comment)
        .then( comment => dipatch(receiveComment(comment)),
        err => (
            dispatch(commentError(err.responseJSON))
        ))
)

export const updateComment = comment => dipatch =>(
    APIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
        err => (
            dispatch(commentError(err.responseJSON))
        ))

)

export const deleteComment = commentId => dipatch => (
    APIUtil.deleteComment(commentId)
        .then(comment=> dispatch(removeComment(commentId)),
        err => (
            dispatch(commentError(err.responseJSON))
        ))
)


// Comment actions
export const receiveComments = ({users, comments}) => ({
    type: RECEIVE_COMMENTS,
    users,
    comments
})

export const receiveComment = ({ comment, post }) => ({
    type: RECEIVE_COMMENT,
    comment,
    post
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})


// Error actions
export const commentError = errors => ({
    type: COMMENT_ERRORS,
    errors
})

export const clearErrors = (errors) => ({
    type: CLEAR_ERRORS,
    errors
})