import * as APIUtil from '../util/post_api_util';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const POST_ERRORS = 'POST_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

// Session Thunks

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)))
)
export const fetchUserPosts = (id) => dispatch => (
    APIUtil.fetchUserPosts(id)
        .then(posts => dispatch(receivePosts(posts)))
)

export const fetchPost = postId => dispatch => (
    APIUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
)

export const createPost = post => dipatch => (
    APIUtil.createPost(post)
        .then( post => dipatch(receivePost(post)))

)
export const updatePost = post => dipatch =>(
    APIUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)))

)

export const deletePost = postId => dipatch => (
    APIUtil.deletePost(postId)
        .then(post=> dispatch(removePost(postId)))
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

export const postError = error => ({
    type: POST_ERRORS,
    error
})

export const clearErrors = (errors) => ({
    type: CLEAR_ERRORS,
    errors
})

window.fetchPost = fetchPost