import * as APIUtil from '../util/post_api_util';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const POST_ERRORS = 'POST_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

// Session Thunks

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)),
        err => (
            dispatch(postError(err.responseJSON))
        ))
)

export const fetchUserPosts = (id) => dispatch => (
    APIUtil.fetchUserPosts(id)
        .then(posts => dispatch(receivePosts(posts)),
        err => (
            dispatch(postError(err.responseJSON))
        ))
)

export const fetchExplore = () => dispatch => (
    APIUtil.fetchExplore()
        .then(posts => dispatch(receivePosts(posts)),
        err => (
            dispatch(postError(err.responseJSON))
        ))
)

export const fetchPost = postId => dispatch => (
    APIUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)),
        err => (
            dispatch(postError(err.responseJSON))
        ))
)

export const createPost = post => dipatch => (
    APIUtil.createPost(post)
        .then( post => dipatch(receivePost(post)),
        err => (
            dispatch(postError(err.responseJSON))
        ))
)

export const updatePost = post => dipatch =>(
    APIUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)),
        err => (
            dispatch(postError(err.responseJSON))
        ))

)

export const deletePost = postId => dispatch => (
    APIUtil.deletePost(postId)
        .then(post=> dispatch(removePost(postId)),
        err => (
            dispatch(postError(err.responseJSON))
        ))
)


// Post actions
export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
})


// Error actions

export const postError = errors => ({
    type: POST_ERRORS,
    errors
})

export const clearErrors = (errors) => ({
    type: CLEAR_ERRORS,
    errors
})

window.fetchPost = fetchPost