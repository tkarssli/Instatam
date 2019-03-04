export const fetchPosts = () => (
    $.ajax({
        method: "GET",
        url: "api/posts",
    })
)

export const fetchUserPosts = (id) => (
    $.ajax({
        method: "GET",
        url: `api/users/${id}/posts`,
    })
)

export const fetchPost = id => (
    $.ajax({
        method: "GET",
        url: `/api/posts/${id}`,
    })
)

export const createPost = post => (
    $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: {
            post
        }
    })
)
export const updatePost = post => (
    $.ajax({
        method: "patch",
        url: `/api/posts/${post.id}`,
        data: {
            post
        }
    })
)

export const deletePost = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/posts/${id}`,
    })
)