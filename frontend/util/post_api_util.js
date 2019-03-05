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

export const createPost = post => {
    const formData = new FormData();
    formData.append('post[caption]', post.caption);
    formData.append('post[photo]', post.imageFile);

    return $.ajax({
        method: "POST",
        tpye: "POST",
        url: `/api/posts`,
        data: formData,
        contentType: false,
        processData: false
    })
}
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